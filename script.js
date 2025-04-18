const influencerData = [
    {
      name: "Raj Kumar",
      niche: "tech",
      followers: "1.2M",
      platform: "YouTube"
    },
    {
      name: "Meena Sharma",
      niche: "fashion",
      followers: "800K",
      platform: "Instagram"
    },
    {
      name: "John Fit",
      niche: "fitness",
      followers: "950K",
      platform: "TikTok"
    },
    {
      name: "Aisha Travels",
      niche: "travel",
      followers: "500K",
      platform: "YouTube"
    },
    {
      name: "Kiran Tech",
      niche: "tech",
      followers: "1M",
      platform: "Instagram"
    }
  ];
  
  function searchInfluencers() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    const filtered = influencerData.filter(influencer =>
      influencer.niche.toLowerCase().includes(keyword)
    );
  
    if (filtered.length === 0) {
      results.innerHTML = `<p style="text-align:center;">No influencers found for this niche.</p>`;
      return;
    }
  
    filtered.forEach(influencer => {
      const card = document.createElement("div");
      card.className = "influencer-card";
      card.innerHTML = `
        <h3>${influencer.name}</h3>
        <p><strong>Niche:</strong> ${influencer.niche}</p>
        <p><strong>Followers:</strong> ${influencer.followers}</p>
        <p><strong>Platform:</strong> ${influencer.platform}</p>
      `;
      results.appendChild(card);
    });
  }
  