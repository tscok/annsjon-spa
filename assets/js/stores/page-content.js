var iba = require('../../md/iba');

var guide = require('../../md/guide');
var guideAnn = require('../../md/guide-ann');
var guideHandol = require('../../md/guide-handol');
var guideStorlien = require('../../md/guide-storlien');
var guideStorulvan = require('../../md/guide-storulvan');

var projects = require('../../md/projects');

var projectsDb = require('../../md/projects-db');
var projectsDbBackground = require('../../md/projects-db-background');

var reports = require('../../md/reports');
var reportsDb = require('../../md/reports-db');

var about = require('../../md/about');
var contact = require('../../md/contact');

var volunteer = require('../../md/volunteer');
var volunteerFaq = require('../../md/volunteer-faq');

var page404 = require('../../md/404');


var pageContent = function() {
    riot.observable(this);

    var self = this;
    var subRoute = riot.route.create();

    function scrollUp() {
        window.scrollTo(0,0);
    }

    function setPageContent(data) {
        self.trigger('SET_PAGE_CONTENT', data);
        scrollUp();
    }
    
    this.on('route', function(route) {
        switch(route) {
            case 'iba':
                setPageContent(iba);
                break;
            case 'guide':
                setPageContent(guide);
                break;
            case 'projects':
                setPageContent(projects);
                break;
            case 'reports':
                setPageContent(reports);
                break;
            case 'about':
                setPageContent(about);
                break;
            case 'contact':
                setPageContent(contact);
                break;
            case 'volunteer':
                setPageContent(volunteer);
                break;
            default:
                setPageContent(page404);
        }
    });

    // Sub routes

    subRoute('guide/*', function(name) {
        switch(name) {
            case 'ann':
                setPageContent(guideAnn);
                break;
            case 'handol':
                setPageContent(guideHandol);
                break;
            case 'storlien':
                setPageContent(guideStorlien);
                break;
            case 'storulvan':
                setPageContent(guideStorulvan);
        }
    });

    subRoute('projects/*', function(name) {
        switch(name) {
            case 'great-snipe':
                setPageContent(projectsDb);
                break;
            case 'great-snipe-background':
                setPageContent(projectsDbBackground);
        }
    });

    subRoute('reports/*', function(name) {
        if (name) {
            setPageContent(reportsDb);
        }
    });

    subRoute('volunteer/*', function(name) {
        if (name) {
            setPageContent(volunteerFaq);
        }
    });
}

module.exports = pageContent;
