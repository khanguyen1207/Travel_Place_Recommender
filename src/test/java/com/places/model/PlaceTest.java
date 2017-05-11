/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.places.model;

import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author blaze
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Place.class)
public class PlaceTest {

    /**
     * Test of getPhotos method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testGetPhotos() {
        System.out.println("getPhotos");
        Place instance = new Place();
        List<String> expResult = null;
        List<String> result = instance.getPhotos();
        assertEquals(expResult, result);

    }

    /**
     * Test of setPhotos method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetPhotos() {
        System.out.println("setPhotos");
        List<String> photos = null;
        Place instance = new Place();
        instance.setPhotos(photos);

    }

    /**
     * Test of getPlaceId method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testGetPlaceId() {
        System.out.println("getPlaceId");
        Place instance = new Place();
        instance.setPlaceId("fdsaf");
        String expResult = "fdsaf";
        String result = instance.getPlaceId();
        assertEquals(expResult, result);

    }

    /**
     * Test of setPlaceId method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetPlaceId() {
        System.out.println("setPlaceId");
        String placeId = "";
        Place instance = new Place();
        instance.setPlaceId(placeId);

    }

    /**
     * Test of getPlaceName method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testGetPlaceName() {
        System.out.println("getPlaceName");
        Place instance = new Place();
        instance.setPlaceName("Helsinki");
        String expResult = "Helsinki";
        String result = instance.getPlaceName();
        assertEquals(expResult, result);

    }

    /**
     * Test of setPlaceName method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetPlaceName() {
        System.out.println("setPlaceName");
        String placeName = "";
        Place instance = new Place();
        instance.setPlaceName(placeName);

    }

    /**
     * Test of setAddress method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetAddress() {
        System.out.println("setAddress");
        String address = "";
        Place instance = new Place();
        instance.setAddress(address);

    }

    /**
     * Test of setType method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetType() {
        System.out.println("setType");
        String type = "";
        Place instance = new Place();
        instance.setType(type);

    }

    /**
     * Test of getAvgRating method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testGetAvgRating() {
        System.out.println("getAvgRating");
        Place instance = new Place();
        double expResult = 0.0;
        double result = instance.getAvgRating();
        assertEquals(expResult, result, 0.0);

    }

    /**
     * Test of setAvgRating method, of class Place.
     */
    @Test
    @Category(com.places.model.UnitTests.class)
    public void testSetAvgRating() {
        System.out.println("setAvgRating");
        double avgRating = 0.0;
        Place instance = new Place();
        instance.setAvgRating(avgRating);

    }

    @Test
    @Category(com.places.model.IntegrationTests.class)
    public void testIntegration1() {
        System.out.println("This is sample integration test.");
    }
}
