var container = document.querySelector('body');

var regions = document.querySelectorAll('.region');
console.log(container);
var timeout = 10;
var showTimeout;
var hideTimeout;
var checkTimeout;
var isTooltip = false;

// Positions the tooltip relative to the SVG section

function positionTooltip(region, tooltip) {
  regionRect = region.getBoundingClientRect();
  tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.top = (container.scrollTop + regionRect.top) - (tooltipRect.height - (regionRect.height * .25)) + 'px';
  tooltip.style.left = ((regionRect.left + (regionRect.width / 2)) - (tooltipRect.width / 2)) + 'px';
}

function showTooltip(region, tooltip) {
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
  console.log(document.getElementById(targetID));
  

  // This creates a timeout we can interrupt later for showing the tooltips
  function delayedShow(showDelay) {
    showTimeout = window.setTimeout(function() {
      // console.log(document.getElementById(targetID));
      //  document.getElementById(targetID).style.fill= "#FFFF99";
      showTooltip(region, tooltip);
      container.addEventListener('scroll', function(event) {
        positionTooltip(region, tooltip);
      });
    }, showDelay);
  }

  function runCheck() {
    checkTimeout = window.setTimeout(function() {

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
  // document.getElementById(targetID).style.fill= "#fdfcea"
  // This creates a timeout we can interrupt later for hiding the tooltips
  function delayHide() {
    hideTimeout = window.setTimeout(function() {
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

  // IE Doesn't support classList on SVG elements, so provide a fallback override. Maybe a pollyfill would be good here
  if (currentRegion.classList == null) {

    document.querySelector('body').classList.add('no-svg-classlist');

  } else {

    // Match our regions to the tooltips
    var regionID = currentRegion.id;
    console.log(regionID);
    var tooltipTemplate = document.querySelector('section[data-region="' + regionID + '"]');
    var tooltipContent = tooltipTemplate.innerHTML;
    console.log(tooltipTemplate);
    // Hide the tooltip templates...should be an option based on the needs of the design
    tooltipTemplate.style.display = 'none';

    // Create the tooltips
    if (tooltipTemplate) {
      var tooltip = document.createElement('div');
      tooltip.innerHTML = tooltipContent;
      tooltip.classList.add('map-tooltip', 'card-background');
      tooltip.dataset.region = regionID;
      tooltip.addEventListener('mouseenter', function(event) {
        activateTooltip(event);
      });
      tooltip.addEventListener('mouseleave', function(event) {
        deactivateTooltip(event);
      });
      container.appendChild(tooltip);
    }

    // Start the tooltip logic when the regions are hovered
    currentRegion.addEventListener('mouseenter', function(event) {
      activateTooltip(event);
    });

    currentRegion.addEventListener('mouseleave', function(event) {
      deactivateTooltip(event);
    });
  }

}