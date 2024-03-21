(() => {
    const styleContent = `.labs-follow-me-twitter, .labs-follow-me {
    transform: scale(1);
    position: fixed;
    transition: background 0.3s ease;
    padding: 1rem;
    right: .25rem;
    top: .25rem;
    color: currentColor !important;
    z-index: 1000000;
    &:visited, &:active {
      color: currentColor;
    }
    @media (hover) {
      &:hover {
        background: rgba(255, 255, 255, 0.04);
      }
    }
  }
  `;
    const hide = `.labs-follow-me{display: none !important}`;
    const disableAnimations = `
      *, *:before, *:after {animation-play-state: paused !important; --base-speed: 0s; }
    `;

    const embed = new URLSearchParams(window.location.search).has("labs-embed");
    const style = document.createElement("style");
    if (embed) {
      style.innerHTML = hide;
    } else {
      style.innerHTML = styleContent;
    }
    document.head.appendChild(style);

    if (embed) {
      setTimeout(() => {
        const style2 = document.createElement("style");
        style2.innerHTML = disableAnimations;
        document.head.appendChild(style2);
        window.clearInterval(0);
        window.clearInterval(1);
        window.clearInterval(2);
        window.setTimeout = window.setInterval = window.requestAnimationFrame = () => {};
        document
          .querySelectorAll("animate")
          .forEach((node) => node.setAttribute("dur", "0s"));
      }, 5000);
    }

    let followMeButton = document.createElement("a");
    followMeButton.classList.add("labs-follow-me-twitter");
    followMeButton.classList.add("labs-follow-me");
    document.body.appendChild(followMeButton);
    followMeButton.href = "https://www.instagram.com/adriiiiiix/";
    followMeButton.target = "_top";
    followMeButton.setAttribute('title', 'Follow me on instagram!');
    followMeButton.innerHTML = `<svg width="74" height="23" viewBox="0 0 74 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="gray" flood-opacity="0.5" />
      </filter>
    </defs>
    <text x="10" y="18" font-family="Copperplate" font-size="25" fill="black" filter="url(#shadow)">Adry</text>
  </svg>
  `.replaceAll('fill="black"','fill="currentColor"');
  })();