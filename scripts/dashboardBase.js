var dashboardBase = function(app, headerHeight) {
  "use strict";
  var items = [],
    currentId = 0,
    self = this;

  google.load("visualization", "1", { packages: ["table"] });

  // Content
  function resizeAllIframes() {
    for (var i = 0; i < items.length; i++) {
      resizeIframe(items[i].div);
    }
  }

  function resizeIframe(id) {
    var iframe = document.getElementById(id);

    var windowHeight = $(window).height();
    iframe.height = windowHeight - headerHeight + "px";
  }

  function refreshPage(id) {
    var iframe = document.getElementById(id);
    iframe.src = iframe.src;

    resizeIframe(id);
  }

  function generateContent() {
    $("body").append("<div class='tab-content' id='content' />");
    var $content = $("#content");
    var windowsToOpen = [],
      url,
      i;

    for (i = 0; i < items.length; i++) {
      url = items[i].url;
      var divId = items[i].div;

      if (items[i].PopUp === 0) {
        $content.append(
          "<div class='tab-pane fade in' id='" +
            divId +
            "-tab'><div id='buttonBar' class='btn-group btn-group-justified' style='width:100%'>" +
            "<button type='button' style='width:33% !important;' class='btn btn-info btn-sm btn-block' onclick='" +
            app +
            ".loadPrevious()'>&lt;- Back</button>" +
            "<button type='button' style='width:33% !important;' class='btn btn-success btn-sm btn-block' onclick='" +
            app +
            ".loadNext()'>Forward -&gt;</button>" +
            "<button style='width:34% !important;' type='button' class='btn btn-danger btn-sm btn-block' onclick='" +
            app +
            '.refreshPage("' +
            divId +
            "\")'>[Refresh]</button>" +
            "</div><iframe src='" +
            url +
            "' id='" +
            divId +
            "' marginheight='0' frameborder='0' onLoad=\"" +
            app +
            ".resizeIframe('" +
            divId +
            "');\"></iframe></div>"
        );
      } else {
        windowsToOpen.push(i);
      }
    }

    windowsToOpen.sort(function(a, b) {
      return a - b;
    });
    windowsToOpen.reverse();

    for (i = 0; i < windowsToOpen.length; i++) {
      url = items[windowsToOpen[i]].url;
      items.splice(windowsToOpen[i], 1);

      var w = window.open(url, "_blank");
    }
  }
  // End Content

  // Navigation
  function loadNext() {
    if (currentId === items.length - 1) {
      currentId = 0;
      changeActiveDiv(currentId, items.length - 1);
    } else {
      currentId += 1;
      changeActiveDiv(currentId, currentId - 1);
    }
  }

  function loadPrevious() {
    if (currentId === 0) {
      currentId = items.length - 1;
      changeActiveDiv(currentId, 0);
    } else {
      currentId -= 1;
      changeActiveDiv(currentId, currentId + 1);
    }
  }

  function changeActiveDiv(activeId, oldId) {
    var oldElementId = "#div" + oldId + "-tab",
      newElementId = "#div" + activeId + "-tab",
      activeClass = "active";

    $(oldElementId).removeClass(activeClass);
    $("div.tab-pane").removeClass(activeClass);
    $("a[href]")
      .parent()
      .removeClass(activeClass);
    $("a[href]")
      .parent()
      .parent()
      .parent()
      .removeClass(activeClass);

    $("a[href='" + newElementId + "']")
      .parent()
      .addClass(activeClass);
    $("a[href='" + newElementId + "']")
      .parent()
      .parent()
      .parent()
      .addClass(activeClass);
    $(newElementId).addClass(activeClass);
    $(newElementId).addClass("in");
  }
  // End Navigation

  function checkKey(e) {
    if (e && e.keyCode === 46) {
      loadNext();
    } else if (e && e.keyCode === 44) {
      loadPrevious();
    }
  }

  // Generate Menu
  function generateMenu(menuType, $menuElementAnchor) {
    if (items.length > 20 || menuType === "HierarchyMenu") {
      generateHierarchyMenu($menuElementAnchor);
    } else if (items.length > 8 || menuType === "DropdownMenu") {
      generateDropdownMenu($menuElementAnchor);
    } else {
      generateSimpleMenu($menuElementAnchor);
    }

    $("#menu>li:first").click();
  }

  function generateSimpleMenu($menuElementAnchor) {
    var html = "<ul id='simple' class='nav nav-pills'>",
      i;

    for (i = 0; i < items.length; i++) {
      html =
        html +
        "<li><a data-toggle='tab' href='#" +
        items[i].div +
        "-tab'>" +
        items[i].title +
        "</a></li>";
    }

    html = html + "</ul>";
    $($menuElementAnchor).prepend(html);
  }

  function generateDropdownMenu($menuElementAnchor) {
    var count = 0,
      $menu;

    $($menuElementAnchor).prepend(
      "<ul id='top' class='nav nav-tabs'><li class='dropdown'>" +
        "<a class='dropdown-toggle' data-toggle='dropdown' href='#'>" +
        "Menu" +
        "<span class='caret'></span></a><ul class='dropdown-menu' id='menu'></ul>"
    );

    $menu = $("#menu");

    for (count = 0; count < items.length; count++) {
      var root = "<li><a data-toggle='tab' ";

      if (items[count].type === "Lagging") {
        root += "style='color:#00CC00;'";
      } else if (items[count].type === "Key") {
        root += "style='color:#000;'";
      } else if (items[count].type === "Leading") {
        root += "style='color:#0000ff;'";
      } else if (items[count].type === "Tools") {
        root += "style='color:#ff00ff;'";
      } else if (items[count].type === "News") {
        root += "style='color:#FF0000;'";
      }

      $menu.append(
        root +
          " href='#" +
          items[count].div +
          "-tab'>" +
          items[count].title +
          "</a></li>"
      );
    }
  }

  function generateHierarchyMenu($menuElementAnchor) {
    var groups = buildGroups("type");
    writeMenuForEachGroup(groups, $menuElementAnchor);
  }

  function writeMenuForEachGroup(groups, $menuElementAnchor) {
    $($menuElementAnchor).prepend("<ul class='nav nav-tabs' id='menu'></ul>");
    var $menu = $("#menu");

    for (var property in groups) {
      if (groups.hasOwnProperty(property)) {
        var group = groups[property],
          root =
            "<li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#'>" +
            property +
            "<span class='caret'></span></a><ul class='dropdown-menu'>";

        for (var j = 0; j < group.length; j++) {
          root =
            root +
            "<li><a data-toggle='tab' href='#" +
            group[j].div +
            "-tab'>" +
            group[j].title +
            "</a></li>";
        }

        root += "</ul></li>";

        $menu.append(root);
      }
    }
  }

  function buildGroups(groupKey) {
    var model = {};

    for (var i = 0; i < items.length; i++) {
      if (model[items[i][groupKey]] === undefined) {
        model[items[i][groupKey]] = [];
      }

      model[items[i].type].push(items[i]);
    }

    return model;
  }
  // End Generate Menu

  return {
    loadNext: loadNext,
    loadPrevious: loadPrevious,
    checkKey: checkKey,
    headerHeight: headerHeight,
    items: items,
    currentId: currentId,
    generateContent: generateContent,
    refreshPage: refreshPage,
    resizeIframe: resizeIframe,
    resizeAllIframes: resizeAllIframes,
    generateMenu: generateMenu
  };
};
