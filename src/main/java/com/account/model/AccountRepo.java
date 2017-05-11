package com.account.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by khanguyen on 5/6/17.
 */
@Repository
public interface AccountRepo extends JpaRepository<Account, Long> {
    Account findByUsername(String username);
}
