function toggleContent() {
  const hiddenContent = document.querySelector(".hidden");
  hiddenContent.classList.toggle("show"); 

  var iconPath = document.getElementById('iconPath');
  
  if (iconPath && iconPath.getAttribute('d') === "M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z") {
    iconPath.setAttribute('d', "M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z");
  } else if (iconPath) {
  iconPath.setAttribute('d', "M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z");
  }
}

function toggleIcon(iconId) {
  const icon = document.getElementById(iconId);
  const currentState = icon.getAttribute('data-state');

  // Toggle between two SVG URLs
  if (currentState === 'dashed') {
    icon.innerHTML = '<image xlink:href="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" width="24" height="24"/>';
    icon.setAttribute('data-state', 'checkmark');
  } else {
    icon.innerHTML = '<image xlink:href="https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg" width="24" height="24"/>';
    icon.setAttribute('data-state', 'dashed');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var userDropdown = document.getElementById("userDropdown");
  var userProfile = document.querySelector(".user-profile");

  userProfile.addEventListener("click", () => {
    if (userDropdown.style.display === "block") {
        userDropdown.style.display = "none";
    } else {
        userDropdown.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var notificationDropdown = document.querySelector(".notification-dropdown");
  var notification = document.querySelector(".notification-container");

  notification.addEventListener("click", () => {
    if (notificationDropdown.style.display === "block") {
        notificationDropdown.style.display = "none";
    } else {
        notificationDropdown.style.display = "block";
    }
  });
});

  