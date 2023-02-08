Office.ribbon.requestAccessAsync(function(result) {
  if (result.status === Office.AsyncResultStatus.Succeeded) {
    Office.ribbon.getTabByIdAsync("TabHome", function(result) {
      var tab = result.value;
      tab.addButton({
        id: "myCustomButton",
        label: "Show Quarantine",
        image: "url-to-image",
        onClick: function() {
          window.open("https://security.microsoft.com/quarantine");
        }
      });
    });
  }
});