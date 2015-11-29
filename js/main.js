angular.module('ngAppWdt', [])
.controller('MainController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.a = 1;
    $scope.b = 2;

    $scope.maps = [
        {
            mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
            mapName: "home - office",
            mapIconFrom: "home",
            mapIconTo: "briefcase",
            currentTime: 17,
            warnWhen: 30,
            avarages: [
                 { avarageTime: 23, timeSpan: "Mon-Fri 7:20-8:00" },
                 { avarageTime: 16, timeSpan: "Mon-Fri 10:00-11:00" },
            ],
            alternatives: [
                {
                    mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
                    mapName: "via A4 and Bohenskiego",
                    currentTime: 20,
                },
                {
                    mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
                    mapName: "via Chorzow Stary",
                    currentTime: 24,
                },
            ],
        },
        {
            mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d40808.42828520673!2d18.962338508944928!3d50.26342220795835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!5e0!3m2!1sen!2spl!4v1448722072439"),
            mapName: "office - home",
            mapIconFrom: "briefcase",
            mapIconTo: "home",
            currentTime: 45,
            warnWhen: 30,
            avarages: [
                 { avarageTime: 25, timeSpan: "Mon-Fri 15:30-16:30" },
                 { avarageTime: 16, timeSpan: "Mon-Fri 17:00-18:00" },
            ],
            alternatives: [
                {
                    mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
                    mapName: "via A4 and Bohenskiego",
                    currentTime: 20,
                },
                {
                    mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
                    mapName: "via Chorzow Stary",
                    currentTime: 24,
                },
            ],
        },
        {
            mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d40799.17201720367!2d18.940098159060376!3d50.27422484588168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716ce1749f22e8f%3A0x29ceecc54566154a!2sSilesia+City+Center%2C+Chorzowska%2C+Katowice!3m2!1d50.270748399999995!2d19.005010199999997!5e0!3m2!1sen!2spl!4v1448732395793"),
            mapName: "home - scc",
            mapIconFrom: "home",
            mapIconTo: "shopping-bag",
            currentTime: 15,
            warnWhen: 30,
            avarages: [
                 { avarageTime: 25, timeSpan: "Mon-Fri 15:30-16:30" },
                 { avarageTime: 16, timeSpan: "Mon-Fri 17:00-18:00" },
            ],
            alternatives: [
                {
                    mapUrl: $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49463.09241614406!2d18.95424801250209!3d50.273076235018486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x4716cdbecc77fc2b%3A0x6868f8c25c79186c!2zT2Jyb8WEY8OzdyBDaG9yem93YSAxMSwgQ2hvcnrDs3c!3m2!1d50.266996899999995!2d18.940616!4m5!1s0x4716d1d9539eb51d%3A0x31dee8fd56174beb!2sKonduktorska+35%2C+Katowice!3m2!1d50.2833794!2d19.0295973!5e0!3m2!1sen!2spl!4v1448721997719"),
                    mapName: "via A4 and Bohenskiego",
                    currentTime: 20,
                },
            ],
        },
    ];

}])
