/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "My calendar",
						url: "https://calendar.google.com/calendar/ical/krishanraman321%40gmail.com/public/basic.ics"					
					}
				]
			}
		},
		
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Buffalo",
				locationID: "5819881", 
				appid: "0bbca3caf667fa9397d45b685044531a"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Buffalo",
				locationID: "5819881",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "0bbca3caf667fa9397d45b685044531a"
			}
		},
		{
		module: "MMM-Screencast",
		position:"center", // This position is for a hidden <div /> and not the screencast window
		config: {
			position: "center",
			height: 300,
			width: 500
		}
       	    },
		{
		    module: 'MMM-NetworkConnection',
		    position: 'bottom_right',
		    config: {
		 initialLoadDelay: 25000
		    }
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};	

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
