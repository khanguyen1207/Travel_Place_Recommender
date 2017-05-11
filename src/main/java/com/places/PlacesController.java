package com.places;

import com.Utils;
import com.account.model.Account;
import com.account.model.AccountRepo;
import com.places.model.Place;
import com.review.model.Review;
import com.review.model.ReviewRepo;
import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by khanguyen on 4/26/17.
 */
@RestController
public class PlacesController {
    @Autowired
    private UserBasedRecommender userBasedRecommender;
    @Autowired
    private ReviewRepo reviewRepo;
    @Autowired
    private AccountRepo accountRepo;

    @RequestMapping("/search")
    public ResponseEntity<?> keywordSearch(@RequestParam("keyword") String keyword) {
        List<Place> searchResults = new ArrayList<>();
        String textSearchUrl = Utils.apiPlaceTextSearchUrl + Utils.query + keyword;
        String jsonResponse = Utils.getJsonFromGetRequest(textSearchUrl);
        JSONObject jsonObject = new JSONObject(jsonResponse.trim());
        JSONArray result = jsonObject.getJSONArray("results");
        for (int i = 0; i < result.length(); i++) {
            String placeId = result.getJSONObject(i).getString("place_id");
            Place placeDetail = getPlaceDetailFromId(placeId);
            searchResults.add(placeDetail);
        }
        return new ResponseEntity<>(searchResults, HttpStatus.OK);
    }

    @RequestMapping("/searchDetail")
    public ResponseEntity<?> placeDetailSearch(@RequestParam("placeId") String placeId) {
        Place placeDetail = getPlaceDetailFromId(placeId);
        placeDetail.setReviewList(getListReviewByPlaceId(placeId));
        return new ResponseEntity<>(placeDetail, HttpStatus.OK);
    }

    @RequestMapping("/nearBy")
    public ResponseEntity<?> findNearbyPlaces(@RequestParam("keyword") String keyword, @RequestParam("location") String location) {
        List<Place> searchResults = new ArrayList<>();
        String nearbySearchUrl = Utils.apiNearbySearch + location + Utils.and + Utils.keyword + keyword;
        String jsonResponse = Utils.getJsonFromGetRequest(nearbySearchUrl);
        JSONObject jsonObject = new JSONObject(jsonResponse.trim());
        JSONArray result = jsonObject.getJSONArray("results");
        for (int i = 0; i < result.length(); i++) {
            String placeId = result.getJSONObject(i).getString("place_id");
            Place placeDetail = getPlaceDetailFromId(placeId);
            searchResults.add(placeDetail);
        }
        return new ResponseEntity<>(searchResults, HttpStatus.OK);
    }

    @RequestMapping("/recommend")
    public ResponseEntity<?> recommendPlace() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Account currentUser = accountRepo.findByUsername(username);
        List<RecommendedItem> recommendedItems;
        try {
            recommendedItems = userBasedRecommender.recommend(currentUser.getUserid(), 4);
        } catch (TasteException e) {
            e.printStackTrace();
            recommendedItems = new ArrayList<>();
        }
        List<Place> searchResults = new ArrayList<>();
        for (RecommendedItem recommendation : recommendedItems) {
            String placeId = reviewRepo.findPlaceIdByHashCode(recommendation.getItemID());
            Place placeDetail = getPlaceDetailFromId(placeId);
            placeDetail.setReviewList(getListReviewByPlaceId(placeId));
            searchResults.add(placeDetail);
        }
        return new ResponseEntity<>(searchResults, HttpStatus.OK);
    }

    private List<Review> getListReviewByPlaceId(String place_id) {
        return reviewRepo.findReviewUsingPlaceId(place_id);
    }

    private Place getPlaceDetailFromId(String placeId) {
        String detailSearchUrl = Utils.apiPlaceDetailSearchUrl + Utils.place_id + placeId;
        String jsonResponse = Utils.getJsonFromGetRequest(detailSearchUrl);
        JSONObject curResult = new JSONObject(jsonResponse.trim()).getJSONObject("result");
        Place placeDetail = new Place();
        placeDetail.setPlaceId(curResult.getString("place_id"));
        placeDetail.setAddress(curResult.getString("formatted_address"));
        placeDetail.setPlaceName(curResult.getString("name"));
        placeDetail.setType(curResult.getJSONArray("types").getString(0));
        List<String> photoRefs = new ArrayList<>();
        if (curResult.has("photos")) {
            JSONArray photos = curResult.getJSONArray("photos");
            for (int j = 0; j < photos.length(); j++) {
                photoRefs.add(Utils.apiPhotoUrl + photos.getJSONObject(j).getString("photo_reference"));
            }
            placeDetail.setPhotos(photoRefs);
        }
        return placeDetail;
    }
}
