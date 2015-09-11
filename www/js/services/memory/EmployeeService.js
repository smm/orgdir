var EmployeeService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var employees = [
  {
    "id": 1,
    "firstName": "Katina",
    "lastName": "Hopper",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (916) 417-2005",
    "officePhone": "+1 (931) 421-3457",
    "email": "katina.hopper@company.com",
    "city": "Orason",
    "pic": "Katina_Hopper.jpg",
    "twitterId": "@Katina",
    "blog": "http://greynetic.com"
  },
  {
    "id": 2,
    "firstName": "Meyer",
    "lastName": "Horne",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (950) 494-3449",
    "officePhone": "+1 (865) 434-3807",
    "email": "meyer.horne@company.name",
    "city": "Denio",
    "pic": "Meyer_Horne.jpg",
    "twitterId": "@Meyer",
    "blog": "http://greynetic.com"
  },
  {
    "id": 3,
    "firstName": "Gilda",
    "lastName": "Lowery",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (874) 579-2332",
    "officePhone": "+1 (989) 491-3013",
    "email": "gilda.lowery@company.info",
    "city": "Gerton",
    "pic": "Gilda_Lowery.jpg",
    "twitterId": "@Gilda",
    "blog": "http://greynetic.com"
  },
  {
    "id": 4,
    "firstName": "Goldie",
    "lastName": "Allen",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (832) 424-2040",
    "officePhone": "+1 (997) 493-2613",
    "email": "goldie.allen@company.org",
    "city": "Avalon",
    "pic": "Goldie_Allen.jpg",
    "twitterId": "@Goldie",
    "blog": "http://greynetic.com"
  },
  {
    "id": 5,
    "firstName": "Powers",
    "lastName": "Poole",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (811) 562-2867",
    "officePhone": "+1 (947) 431-3024",
    "email": "powers.poole@company.biz",
    "city": "Wedgewood",
    "pic": "Powers_Poole.jpg",
    "twitterId": "@Powers",
    "blog": "http://greynetic.com"
  },
  {
    "id": 6,
    "firstName": "Cortez",
    "lastName": "Cruz",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (857) 460-2532",
    "officePhone": "+1 (802) 549-3656",
    "email": "cortez.cruz@company.me",
    "city": "Springville",
    "pic": "Cortez_Cruz.jpg",
    "twitterId": "@Cortez",
    "blog": "http://greynetic.com"
  },
  {
    "id": 7,
    "firstName": "Fry",
    "lastName": "Thomas",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (800) 518-2880",
    "officePhone": "+1 (876) 528-2653",
    "email": "fry.thomas@company.ca",
    "city": "Harrodsburg",
    "pic": "Fry_Thomas.jpg",
    "twitterId": "@Fry",
    "blog": "http://greynetic.com"
  },
  {
    "id": 8,
    "firstName": "Selma",
    "lastName": "Finch",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (811) 410-2421",
    "officePhone": "+1 (948) 471-3078",
    "email": "selma.finch@company.net",
    "city": "Nadine",
    "pic": "Selma_Finch.jpg",
    "twitterId": "@Selma",
    "blog": "http://greynetic.com"
  },
  {
    "id": 9,
    "firstName": "Stefanie",
    "lastName": "Chaney",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (829) 495-2388",
    "officePhone": "+1 (898) 409-2409",
    "email": "stefanie.chaney@company.us",
    "city": "Westphalia",
    "pic": "Stefanie_Chaney.jpg",
    "twitterId": "@Stefanie",
    "blog": "http://greynetic.com"
  },
  {
    "id": 10,
    "firstName": "Morton",
    "lastName": "Valenzuela",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (936) 500-3490",
    "officePhone": "+1 (959) 553-2467",
    "email": "morton.valenzuela@company.biz",
    "city": "Dupuyer",
    "pic": "Morton_Valenzuela.jpg",
    "twitterId": "@Morton",
    "blog": "http://greynetic.com"
  },
  {
    "id": 11,
    "firstName": "Justice",
    "lastName": "Odom",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (946) 576-3324",
    "officePhone": "+1 (828) 506-3634",
    "email": "justice.odom@company.tv",
    "city": "Cumberland",
    "pic": "Justice_Odom.jpg",
    "twitterId": "@Justice",
    "blog": "http://greynetic.com"
  },
  {
    "id": 12,
    "firstName": "Burks",
    "lastName": "Christensen",
    "managerId": 0,
    "managerName": "",
    "title": "title",
    "department": "Corporate",
    "cellPhone": "+1 (909) 575-3628",
    "officePhone": "+1 (876) 510-3244",
    "email": "burks.christensen@company.co.uk",
    "city": "Coleville",
    "pic": "Burks_Christensen.jpg",
    "twitterId": "@Burks",
    "blog": "http://greynetic.com"
  }
];

}
