package io.anshul.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.anshul.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long>{

    Team findByTeamName (String teamName);


    
}
