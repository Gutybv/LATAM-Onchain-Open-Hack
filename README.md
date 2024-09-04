# BUILder - Social Platform for Hackers & Builders

BUILder is a social platform running on Base that allows anyone to find builders to network and collaborate at hackathons and tech events across the globe.

## Problem Statement

The app addresses two key problems in today's networking platforms:

1. **Self-reported data**: Most platforms rely on user-reported data, which can be inaccurate or incomplete.
2. **Time-consuming data acquisition**: Collecting non-self-reported data is often a slow and tedious process.

## Solution

BUILder aggregates verified, on-chain reputation data to provide users with quick and reliable matches. It offers a gamified and smooth experience, making networking fun and efficient for hackathon participants and builders.

### Key Features:

- **🔎 Discover Builders Like Tinder**: Swipe "Like" or "Pass" on builders based on shared interests. Build strong hackathon teams by finding complementary skills.
  
- **💫 Real On-Chain Data**: Access a builder's interests, skills, knowledge, and more through aggregated and verified data, ensuring that connections are valuable.
  
- **🤝 Match Gallery**: Keep track of your past matches for future networking opportunities.
  
- **🔓 Secure Matching Mechanism**: Builders are refunded only after meeting in real life, secured through a dynamic QR code that both parties scan.
  
- **💰 Extra Rewards for Winning Teams**: Builders who form teams through BUILder and win a hackathon will receive additional rewards from BUILder's treasury.

---

## How Does the Incentive Mechanism Work?

- Users must pay **$5** to cast a "Like", incentivizing real, meaningful connections.
- All funds from likes are held in a smart contract escrow (`buildercontract.sol`).
- When two builders match, they meet in real life and scan their QRs to release the funds (minus a **10% fee** for BUILder).
- If they don't meet before the event's due date, **100%** of the funds are forfeited to the protocol.
- Builders who match, form a hackathon team, and win prizes will be rewarded with an extra bonus from BUILder's treasury.

**Note:** Event deadlines and builder success in hackathons are reviewed manually by the BUILder team in collaboration with event organizers.

---

## Data Endpoints (Powered by Subsquid)

- **ENS** + PFP
- **NFTs**: Curated list based on meaningful connections
- **Events Attended**: Curated list (POAPs and NFT tickets)
- **Hackathon Participation**: Curated list (POAPs and NFT tickets)
- **Top Connections**: Extracted from the "BUILD" endorsement game
- **Main Chains**: Based on chains with the most transactions
- **Skills**: Via Subsquid data indexing
- **Zodiac Sign**: Based on wallet age
- **Proof of Humanity (PoH)**: Via Subsquid

Subsquid, a powerful data indexer, is used to extract rich on-chain data, offering reliable, real-time insights for builders.

---

## Business Model

- **10% fee** if builders match.
- **100% fee** if builders don't meet in real life.
- **Upcoming:** Fees for hackathons to integrate with BUILder.

---

🎨 **Prototype Figma**: [View Prototype](https://www.figma.com/proto/HKPVkbNM2KuMz2YAzu5kQO/Builder-app-Ethereum-Argentina?node-id=0-1&amp;t=XViykLh6HbUxKH1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A264)

📜 **Contract Address**: [0x135b2718Cac2b5fD3d7158Fe962c038B126209B3](https://sepolia.basescan.org/address/0x135b2718Cac2b5fD3d7158Fe962c038B126209B3)
