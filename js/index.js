window.onload = function () {
  var container = document.querySelector('body');
  var regions = document.querySelectorAll('.region');
  var timeout = 10;
  var showTimeout;
  var hideTimeout;
  var checkTimeout;
  var isTooltip = false;
  var AREAS = [
    { "№": "1", "Область": 'Вінницька', "Кількість округів": 8, id: 'path7227' },
    { "№": "2", "Область": 'Волинська', "Кількість округів": 5, id: 'path7241' },
    { "№": "3", "Область": 'Дніпропетровська', "Кількість округів": 17, id: 'path7083' },
    { "№": "4", "Область": 'Донецька', "Кількість округів": 21, id: 'path7067' },
    { "№": "5", "Область": 'Житомирська', "Кількість округів": 6, id: 'path7229' },
    { "№": "6", "Область": 'Закарпатська', "Кількість округів": 6, id: 'path7247' },
    { "№": "7", "Область": 'Запорізька', "Кількість округів": 9, id: 'path7075' },
    { "№": "8", "Область": 'Івано-Франківська', "Кількість округів": 7, id: 'path7239' },
    { "№": "9", "Область": 'Київська', "Кількість округів": 9, id: 'path7183' },
    { "№": "10", "Область": 'Кіровоградська', "Кількість округів": 5, id: 'path7147' },
    { "№": "11", "Область": 'Луганська', "Кількість округів": 11, id: 'path7065' },
    { "№": "12", "Область": 'Львівська', "Кількість округів": 12, id: 'path7243' },
    { "№": "13", "Область": 'Миколаївська', "Кількість округів": 6, id: 'path7135' },
    { "№": "14", "Область": 'Одеська', "Кількість округів": 11, id: 'path7223' },
    { "№": "15", "Область": 'Полтавська', "Кількість округів": 8, id: 'path7103' },
    { "№": "16", "Область": 'Рівненська', "Кількість округів": 5, id: 'path7233' },
    { "№": "17", "Область": 'Сумська', "Кількість округів": 6, id: 'path7079' },
    { "№": "18", "Область": 'Тернопільська', "Кількість округів": 5, id: 'path7235' },
    { "№": "19", "Область": 'Харківська', "Кількість округів": 14, id: 'path7071' },
    { "№": "20", "Область": 'Херсонська', "Кількість округів": 5, id: 'path7111' },
    { "№": "21", "Область": 'Хмельницька', "Кількість округів": 7, id: 'path7231' },
    { "№": "22", "Область": 'Черкаська', "Кількість округів": 7, id: 'path7149' },
    { "№": "23", "Область": 'Чернівецька', "Кількість округів": 4, id: 'path7237' },
    { "№": "24", "Область": 'Чернігівська ', "Кількість округів": 6, id: 'path7129' },
  ];
  var arrayAreas = ['Луганська область', 'Донецька область', 'Харківська область',
    'Запорізька область', 'Сумська область', 'Дніпропетровська область',
    'Полтавська область', 'Херсонська область', 'Чернігівська область',
    'Миколаївська область', 'Кіровоградська область', 'Черкаська область',
    'Київська область', 'Одеська область', 'Вінницька область', 'Житомирська область',
    'Хмельницька область', 'Рівненська область', 'Тернопільська область', 'Чернівецька область',
    'Івано-Франківська область', 'Волинська область', 'Львівська область', 'Закарпатська область']


  // Positions the tooltip relative to the SVG section

  function positionTooltip(region, tooltip) {
    regionRect = region.getBoundingClientRect();
    tooltipRect = tooltip.getBoundingClientRect();
    tooltip.style.top = (container.scrollTop + regionRect.top) - (tooltipRect.height - (regionRect.height * .25)) + 'px';
    tooltip.style.left = ((regionRect.left + (regionRect.width / 2)) - (tooltipRect.width / 2)) + 'px';
  }

  function showTooltip(region, tooltip) {
    console.log(region);
    tooltip.classList.add('is-active', 'st3');
    region.classList.add('is-active', 'st3');
    positionTooltip(region, tooltip);
    tooltip.classList.add('is-visible');
    region.classList.remove('is-actve');

    isTooltip = true;
    return isTooltip;
  };

  // Removes the classes from the tooltip and the region.

  function hideTooltip(region, tooltip) {
    tooltip.classList.remove('is-active');
    tooltip.classList.remove('is-visible');
    region.classList.remove('is-active', 'st3');
    isTooltip = false;
    return isTooltip;
  }

  // Sets an active class for the region and tracks the mouse through to the tooltip, binds events to deactive the tooltip/region when hovered away.

  function activateTooltip(event) {
    var targetID = event.currentTarget.id || event.currentTarget.dataset.region;
    var region = document.querySelector('#' + targetID);
    var tooltip = document.querySelector('.map-tooltip[data-region="' + targetID + '"]');
    var tooltipIsActive = tooltip.classList.contains('is-active');

    var tableIs = document.getElementById(targetID + 1);
    console.log(tableIs);
    tableIs.classList.add('st4');



    // This creates a timeout we can interrupt later for showing the tooltips
    function delayedShow(showDelay) {
      showTimeout = window.setTimeout(function () {
        // console.log(document.getElementById(targetID));
        //  document.getElementById(targetID).style.fill= "#FFFF99";
        showTooltip(region, tooltip);
        container.addEventListener('scroll', function (event) {
          positionTooltip(region, tooltip);
        });
      }, showDelay);
    }

    function runCheck() {
      checkTimeout = window.setTimeout(function () {

        // When we're done waiting, and there aren't any visible tooltips, let's make one
        if (isTooltip == false) {
          delayedShow(0);
        }

      }, timeout);

    }

    // Each time we hover into a new event end any checks that are running
    window.clearTimeout(checkTimeout);

    // If we're hovering over the current tooltip, stop any hiding actions on it
    if (tooltipIsActive) {

      window.clearTimeout(hideTimeout);

    } else {

      // If a tooltip is currently visible, let's wait to see if they stay away form it long enough to hide.
      if (isTooltip == true) {
        runCheck();
      } else {

        // There aren't any tooltips around, let's start showing one
        delayedShow(timeout);
      }
    }

  };

  function deactivateTooltip(event) {
    var targetID = event.currentTarget.id || event.currentTarget.dataset.region;
    var region = document.querySelector('#' + targetID);
    var tooltip = document.querySelector('.map-tooltip[data-region="' + targetID + '"]');
    var tooltipIsActive = tooltip.classList.contains('is-active');
    var tableIs = document.getElementById(targetID + 1);
    tableIs.classList.remove('st4');
    // document.getElementById(targetID).style.fill= "#fdfcea"
    // This creates a timeout we can interrupt later for hiding the tooltips
    function delayHide() {
      hideTimeout = window.setTimeout(function () {
        hideTooltip(region, tooltip);
      }, timeout);
    }

    // Changed our mind, end any tooltips that were about to show if we leave.
    window.clearTimeout(showTimeout);

    // Check if the tooltip is active for this event, if it is, start hiding it when we leave.
    if (tooltipIsActive) {
      // If we're moving into the associated tooltip, or region, don't hide anything. If we aren't, start hiding it.
      if (tooltip.contains(event.relatedTarget) == false || region.contains(event.relatedTarget) == false) {
        delayHide()
      }
    } else {
      // If for some reason the tooltip was showing, but isToolTipActive is showing false active, hide it.
      hideTooltip(region, tooltip);
    }

  }

  // Grab our tooltips and bind our events





  for (var i = 0; i < regions.length; i++) {
    var currentRegion = regions[i];
    console.log(currentRegion);
    var section = document.createElement('section');
    section.setAttribute('data-region', currentRegion.id);
    document.body.append(section);
    var h5 = document.createElement('h5');
    h5.append(arrayAreas[i]);

    // var button = document.createElement('button')
    // button.append("Do something")

    // вставить в параграф текстовый и обычный узлы
    section.append(h5);

    // IE Doesn't support classList on SVG elements, so provide a fallback override. Maybe a pollyfill would be good here
    if (currentRegion.classList == null) {

      document.querySelector('body').classList.add('no-svg-classlist');

    } else {

      // Match our regions to the tooltips
      var regionID = currentRegion.id;
      var tooltipTemplate = document.querySelector('section[data-region="' + regionID + '"]');
      var tooltipContent = tooltipTemplate.innerHTML;
      // Hide the tooltip templates...should be an option based on the needs of the design
      tooltipTemplate.style.display = 'none';

      // Create the tooltips
      if (tooltipTemplate) {
        var tooltip = document.createElement('div');
        tooltip.innerHTML = tooltipContent;
        tooltip.classList.add('map-tooltip', 'card-background');
        tooltip.dataset.region = regionID;
        tooltip.addEventListener('mouseenter', function (event) {
          activateTooltip(event);
        });
        tooltip.addEventListener('mouseleave', function (event) {
          deactivateTooltip(event);
        });
        container.appendChild(tooltip);
      }

      // Start the tooltip logic when the regions are hovered
      currentRegion.addEventListener('mouseenter', function (event) {
        activateTooltip(event);
      });

      currentRegion.addEventListener('mouseleave', function (event) {
        deactivateTooltip(event);
      });
    }

  }



  function buildTable(data) {
    console.log(regions);
    var table = document.createElement("table");
    table.className = "table table-striped table-bordered table-hover table-condensed";
    var thead = document.createElement("thead");
    thead.className = "thead-dark";
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["№", "Область", "Кількість округів"].forEach(function (el) {
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(el));
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    var areasNew = AREAS.map(function (name, index) {
      var tr = document.createElement("tr");
      console.log(data[index].id + 1);
      tr.setAttribute('id', data[index].id + 1);
      delete name.id;

      for (var o in name) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(name[o]))
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    });
    // data.forEach(function(el,index) {
    //   tr.setAttribute('class', el.id)
    // });
    table.appendChild(tbody);
    return table;
  }
  document.getElementById("table").appendChild(buildTable(AREAS));
}
