// SPDX-License-Identifier: GPLv3
pragma solidity ^0.8.8; //comment

contract SimpleStorage {
    uint256 favouriteNumber;

    mapping(string => uint256) public nameToFavouriteNumber;

    struct People {
        uint256 favouriteNumber;
        string name;
    }

         People[] public people;


    function store(uint256 _favoriteNumber) public virtual {
        favouriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favouriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavouriteNumber[_name] = _favoriteNumber;
    }
}
