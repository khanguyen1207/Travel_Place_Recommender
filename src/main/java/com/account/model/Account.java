package com.account.model;

import com.Utils;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by khanguyen on 5/6/17.
 */
@Table(name = "account")
@Entity
public class Account {
    @Id
    private String username;
    private String password;
    private long userid;
    private String role;
    private boolean enabled;

    public Account(String username, long userid) {
        this.username = username;
        this.userid = userid;
        this.enabled = true;
        this.password = Utils.generateRandomString();
        this.role = "ROLE_ADMIN";
    }

    public Account() {

    }

    public String getUsername() {

        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
