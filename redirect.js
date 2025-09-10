$(document).ready(function(){
    $(".redirect-btn").click(function(){
      let target = $(this).data("target");
  
      // Flexible redirect map
      let redirects = {
        "instagram": "https://instagram.com/CozyCandles",
        "feedback": "https://forms.gle/your-feedback-form",
        "shop": "https://yourshoplink.com"
      };
  
      if(redirects[target]){
        console.log("Redirecting user to:", target);
        window.location.href = redirects[target];
      } else {
        alert("Link not found!");
      }
    });
  
    // Track query string ref (?ref=qr, ?ref=ad, etc.)
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has("ref")){
      console.log("Visitor source:", urlParams.get("ref"));
      // Later: connect this to Google Analytics or Plausible
    }
  });
  