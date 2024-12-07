

let totalAmount = parseFloat(document.getElementById("amount").innerText);
const updateDonation = (donationId, inputId) => {
    const donationInput = parseFloat(document.getElementById(inputId).value);
    const currentDonation = parseFloat(document.getElementById(donationId).innerText);
    
console.log(donationInput);
    

   
    // if (donationInput <= 0 || isNaN(donationInput)) {
    //     document.getElementById(errorId).classList.remove("hidden");
    //     return;
    // }
    if (donationInput <= 0 || isNaN(donationInput)) {
        alert("Invalid donation amount! Please enter a valid amount greater than 0.");
       
        return;
    }

    

    if (totalAmount <= 0 || donationInput > totalAmount) {
        alert("Donation amount exceeds the available balance or is invalid. Please enter a valid amount.");
        return;
    }
    
    const updatedDonation = currentDonation + donationInput;
    
    document.getElementById(donationId).innerText = updatedDonation.toFixed(2);
    
  
    totalAmount -= donationInput;
    document.getElementById("amount").innerText = totalAmount.toFixed(2);
    
   
};


// Function to add a history item

function addHistory(donationAmount, donationCause) {
    const historyContainer = document.getElementById("history-list");
  
    
    const historyItem = document.createElement("div");
    historyItem.className = "p-5 border-[1px] rounded-[16px] border-[rgba(17, 17, 17, 0.1) mt-3]"
            
  
   
    historyItem.innerHTML = `
      <p class="donation-details text-[#111111] font-bold">${donationAmount} Taka is Donated for ${donationCause}</p>
      <p class="donation-date text-secondary-color ">Date : ${new Date().toString()}</p>
    `;
  
   
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  }

// Event Listeners for Buttons
document.getElementById("noakhali-donation-button").addEventListener("click", function(event) {
    event.preventDefault();
    const donationAmount = parseFloat(document.getElementById("noakhali-donation-amount").value);

    if (donationAmount > 0 && donationAmount<totalAmount ) {
        updateDonation("noakhali-donation", "noakhali-donation-amount", "amount-error");
        addHistory(donationAmount, "Flood at Noakhali, Bangladesh");
    } else {
        alert("Invalid donation amount! Please enter a valid amount greater than 0.");
    }
});

document.getElementById("feni-donation-button").addEventListener("click", function(event) {
    event.preventDefault();
    const donationAmount = parseFloat(document.getElementById("feni-donation-amount").value);

    if (donationAmount > 0 && donationAmount<totalAmount ) {
        updateDonation("feni-donation", "feni-donation-amount", "feni-amount-error");
        addHistory(donationAmount, "Flood Relief in Feni, Bangladesh");
    } else {
        alert("Invalid donation amount! Please enter a valid amount greater than 0.");
    }
});

document.getElementById("quota-protest-donation-button").addEventListener("click", function(event) {
    event.preventDefault();
    const donationAmount = parseFloat(document.getElementById("quota-protest-donation-amount").value);

    if (donationAmount > 0 && donationAmount<totalAmount ) {
        updateDonation("quota-protest-donation", "quota-protest-donation-amount", "quota-protest-amount-error");
        addHistory(donationAmount, "Aid for Injured in the Quota Movement");
    } else {
        alert("Invalid donation amount! Please enter a valid amount greater than 0.");
    }
});


//  history tap

const historyTab = document.getElementById("history-tab")
const donationTab = document.getElementById("donation-tab")

historyTab.addEventListener("click", function(){

 historyTab.classList.add("bg-primary-color","text-[#111111]")
historyTab.classList.remove("text-secondary-color")

donationTab.classList.remove("bg-primary-color","text-[#111111]")
donationTab.classList.add("text-secondary-color")

document.getElementById("donation-form").classList.add("hidden")
document.getElementById("history-section").classList.remove("hidden")
})
 donationTab.addEventListener('click', function(){

    donationTab.classList.add("bg-primary-color","text-[#111111]")
    donationTab.classList.remove("text-secondary-color")

   historyTab.classList.remove("bg-primary-color","text-[#111111]")
   historyTab.classList.add("text-secondary-color")

   document.getElementById("donation-form").classList.remove("hidden")
   document.getElementById("history-section").classList.add("hidden")
 })

// for modal

 function validateAndDonate() {
    const noakhaliDonationInput = parseFloat(document.getElementById('noakhali-donation-amount').value); 
    const feniDonationInput = parseFloat(document.getElementById('feni-donation-amount').value); 
    const quotaProtestDonationInput = parseFloat(document.getElementById('quota-protest-donation-amount').value); 
    
    
    if (
        (isNaN(noakhaliDonationInput) || noakhaliDonationInput <= 0) &&
        (isNaN(feniDonationInput) || feniDonationInput <= 0) &&
        (isNaN(quotaProtestDonationInput) || quotaProtestDonationInput <= 0)
       
    ) {
       
        return; 
    }
    if (
        (noakhaliDonationInput > totalAmount) ||
        (feniDonationInput > totalAmount) ||
        (quotaProtestDonationInput > totalAmount)
    ) {
        
        return;
    }

    
    const modal = document.getElementById('my_modal_5');
    modal.showModal();
}
