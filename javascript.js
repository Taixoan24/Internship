
try {
    const idQuantityNotification = document.getElementById("notification_quantity");
    const notificationItems = document.querySelectorAll(".notification-item.unread");
    const markAllAsReadButton = document.querySelector(".header-read");

    // Function to toggle the read/unread state of a single notification item
    function SumReadState(notificationItem) {
        if (notificationItem.classList.contains("unread")) {
            notificationItem.classList.remove("unread");
            notificationItem.classList.add("read");
            idQuantityNotification.innerHTML -= 1;
            const icon = notificationItem.querySelector(".icon");
            if (icon) {
                icon.style.display = "none";
            }
        }
    }

    // Function to handle the "Mark all as read" button click
    function markAllAsRead() {
        idQuantityNotification.innerHTML = 0;

        notificationItems.forEach((item) => {
            item.classList.remove("unread");
            item.classList.add("read");
            const icon = item.querySelector(".icon");
            if (icon) {
                icon.style.display = "none";
            }
        });
    }

    // Add event listeners for each notification item to toggle read/unread state on click
    notificationItems.forEach((item) => {
        item.addEventListener("click", () => {
            SumReadState(item);
        });
    });

    // Add event listener for "Mark all as read" button to hide notification_icons
    markAllAsReadButton.addEventListener("click", () => {
        notificationItems.forEach((item) => {
            const icon = item.querySelector(".icon");
            if (icon) {
                icon.style.display = "none";
            }
        });
    });
} catch (error) {
    console.error("Error in notification script:", error);
}