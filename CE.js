function placeBid(itemId) {
    const currentBidElement = document.getElementById(`bid${itemId.charAt(itemId.length-1)}`);
    const currentBid = parseFloat(currentBidElement.innerText.replace('Current Bid: $', ''));
    const newBid = parseFloat(prompt(`Place a bid for Item ${itemId.charAt(itemId.length-1)}:`));

    if (!isNaN(newBid) && newBid > currentBid) {
        currentBidElement.innerText = `Current Bid: $${newBid.toFixed(2)}`;
        alert('Bid placed successfully!');
    } else {
        alert('Invalid bid. Please try again.');
    }
}
