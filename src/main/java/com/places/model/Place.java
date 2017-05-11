package com.places.model;


import com.review.model.Review;

import java.util.List;

/**
 * Created by khanguyen on 4/27/17.
 */
public class Place {
    private String placeId;
    private String placeName;
    private String address;
    private String type;

    public List<Review> getReviewList() {
        return reviewList;
    }

    public void setReviewList(List<Review> reviewList) {
        this.reviewList = reviewList;
    }

    private List<Review> reviewList;
    public List<String> getPhotos() {
        return photos;
    }

    public void setPhotos(List<String> photos) {
        this.photos = photos;
    }

    private double avgRating;
    private List<String> photos;
    public Place() {
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getAvgRating() {
        return avgRating;
    }

    public void setAvgRating(double avgRating) {
        this.avgRating = avgRating;
    }
}
