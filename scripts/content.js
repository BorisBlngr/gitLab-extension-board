chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    var removeItem = function (list) {
        [].forEach.call(list, function (issue) {
            issue.remove();
        });
    };

    removeItem(document.querySelectorAll(".nav-sidebar"));
    removeItem(document.querySelectorAll(".top-area"));
    removeItem(document.querySelectorAll(".nav-links"));
    removeItem(document.querySelectorAll(".alert-wrapper"));
    removeItem(document.querySelectorAll(".issues-filters"));
    removeItem(document.querySelectorAll("aside"));
    removeItem(document.querySelectorAll("header"));


    removeItem(document.querySelectorAll(".issuable-authored"));
    removeItem(document.querySelectorAll(".issuable-meta"));
    removeItem(document.querySelectorAll(".issuable-milestone"));
    removeItem(document.querySelectorAll(".label-link"));
    removeItem(document.querySelectorAll(".label"));


    var content = document.querySelectorAll('.content-list');
    [].forEach.call(content, function (issue) {
        issue.style.setProperty('display', 'grid');
        issue.style.setProperty('grid-template-columns', 'repeat(2,1fr)');
        issue.style.setProperty('grid-gap', '10px');
        issue.style.setProperty('grid-auto-rows', 'minmax(100px, auto)');

    });
    var issues = document.querySelectorAll('.issue');
    [].forEach.call(issues, function (issue) {
        issue.style.setProperty('border', '2px dashed black');

    });


    var issuesTitle = document.querySelectorAll('.issue-title-text a');
    [].forEach.call(issuesTitle, function (issue) {
        var parent = issue.parentNode;
        issue.removeAttribute('href');
        parent.insertBefore(issue.firstChild, issue)
    });

    var issuesRef = document.querySelectorAll('.issuable-reference');
    [].forEach.call(issuesRef, function (issue) {
        var loc = window.location.href.split('/');
        issue.innerHTML = loc[loc.length-2]  + issue.innerHTML;
    });


    sendResponse({data: data, success: true});
});
