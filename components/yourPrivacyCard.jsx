import React from 'react'

const YourPrivacyCard = () => {
  return (
    <div class="privacyCard">
    <h2 class="blogCardTitle">We Value Your Privacy</h2>
    <p class="masterContent text-start">
        We use cookie to enhence your browsing exeperience, serve personalized ads or content and analyze our trafic. By clicking "Accept All", you concent to our use of cookies. <a>Cookie Policy.</a>
    </p>
    <div class="d-flex">
        <button class="borderBtn me-3 w-100">Decline</button>
        <button class="blueBgBtn w-100">Accept all</button>
    </div>
</div>
  )
}

export default YourPrivacyCard