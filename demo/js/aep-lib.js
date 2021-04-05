/** CONSTANTS **/
const RUNTIME_BASE = 'https://adobeioruntime.net/api/v1/web';
const PROFILE_DATA = '/vangeluw/aep/getAEPProfileInfo.json';
const EXPERIENCES_DATA = '/vangeluw/aep/getAEPExperienceEventInfo.json';

const OPTIN_ICON = {
    'out': 'fa fa-window-close-o fa-24 red',
    'in': 'fa fa-check-square-o fa-24 green'
};

const ALLERGY_ICON = {
    'Y': 'fa fa-window-close-o fa-24 red',
    'N': 'fa fa-check-square-o fa-24 green'
};

const CURRENCY_MAP = {
    'AUD': '&#36;',
    'EUR': '&#128;',
    'USD': '&#36;',
    'YEN': '&#165;',
    'GBP': '&#163;',
    'INR': '&#x20B9;'
};
const GENDER_MAP = {
    'male': 'Male',
    'female': 'Female'
};
const CHANNEL_TIMELINE_CLASS = {
    'Desktop': 'online-shop',
    'Mobile App': 'mobile',
    'Store': 'store',
    'Alexa': 'iot-devices',
    'Call center': 'call-center',
    'POS': 'store'
};
const INTERACTION_TYPE_LABEL = {
    'productView': 'Product view',
    'productAddToCart': 'Product Added to Cart',
    'productPurchase': 'Product purchased',
    'storeEntry': 'Store entry',
    'flightBooked': 'Flight booked',
    'flightSearch': 'Flight search',
    'callCenterInteraction': 'Call center',
    'chatbotInteraction' : 'Chatbot - Interest',
    'testDrive': 'Test Drive',
    'mortgageSimulationStep1': 'Mortgage Simulation (1/2)',
    'mortgageSimulationStep2': 'Mortgage Simulation (2/2)'

};
const CALLCENTER_RESPONSE_MAP = {
    'callFeeling': {
        'negative': 'Negative',
        'positive': 'Positive',
        'neutral': 'Neutral'
    },
    'callTopic': {
        'wifi': 'Wifi Issues',
        'promo': 'Promotions',
        'invoice': 'Invoice Questions',
        'complaint': 'Complaint',
        'contract': 'Contract Discussion'
    },
    'contractCancelled': {
        'yes': 'Yes',
        'no': 'No'
    }
};
const CHATBOT_RESPONSE_MAP = {
    conversationStatus: {
        'startConversation': 'Chatbot conversation',
        'interestCategory': 'Category Interest',
        'stopConversation': 'Chatbot conversation stop',
        'productInterest': 'Product Interest'
    }
};

const STORE_IMG = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/store.svg';
const CALLCENTER_IMG = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/phone-volume-solid.svg';
const TEST_DRIVE = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/car-alt-solid.svg';
const MORTGAGE_SIMULATION = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/loan.png';
const FLIGHT_SEARCH = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/flightSearch.png';
const FLIGHT_BOOKED = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/flightBooked.png';
const CHATBOT = 'https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/chatbot.png';

/** GENERIC FUNCTIONS **/
function runtimeURL(operation_type) {
    if (operation_type === "PROFILE")
        return RUNTIME_BASE + PROFILE_DATA;
    else if (operation_type === "EXPERIENCE_EVENTS")
        return RUNTIME_BASE + EXPERIENCES_DATA;
}

function showAlert(sweetalert_param) {
    swal(sweetalert_param);
}

function formatDate(dateValue, format) {
    let dateParam = new Date(dateValue);
    let date = ('0' + dateParam.getDate()).substr(-2);
    let month = ('0' + (dateParam.getMonth() + 1)).substr(-2);
    let year = dateParam.getFullYear();
    let hour = ('0' + dateParam.getHours()).substr(-2);
    let minutes = ('0' + dateParam.getMinutes()).substr(-2);
    let seconds = ('0' + dateParam.getSeconds()).substr(-2);
    let monthShortMap = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    };
    let monthMap = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };


    if (format === "mm/dd/yyyy @ time") {
        return month + '/' + date + '/' + year + ' @ ' + hour + ":" + minutes + ":" + seconds;
    } else if (format === "mm/dd/yyyy time") {
        return month + '/' + date + '/' + year + ' ' + hour + ":" + minutes + ":" + seconds;
    } else if (format === "mm/dd/yyyy") {
        return month + '/' + date + '/' + year;
    } else if (format === "dd/mm/yyyy") {
        return date + '/' + month + '/' + year;
    } else if (format === "dd-mon-yyyy") {
        return date + '/' + monthShortMap[month] + '/' + year;
    } else if (format === "dd-month-yyyy") {
        return date + ' ' + monthMap[month] + ' ' + year;
    } else {
        return year + '-' + month + '-' + date;
    }
};

function resetPageData() {
    /** CUSTOMER PROFILE SECTION **/
    $('.user-photo').attr('src', 'https://acsdemoaccelerators.s3.amazonaws.com/commons/images/men.png');
    $('#fullName').text('______________');
    $('#gender').text('______');
    $('#email').text('______________');
    $('#phone').text('___-____-____');
    $('#mobile-nm').text('___-____-____');
    //$('#birthdate').text('___/____/____');

    $('#opt-in-email>i').attr('class', '');
    $('#opt-in-phone>i').attr('class', '');
    $('#opt-in-sms>i').attr('class', '');
    $('#opt-in-directmail>i').attr('class', '');

    $('#address').text('_________________');

    $('#shoe-size').text("__");
    $('#shirt-size').text("__");
    $('#preferred-color').text("________");

    $('#churn-score').attr('class', 'c100 p0 big center');
    $('#churn-score>span').text('1 %');

    /** CUSTOMER ACTIVITY AREA **/
    $('.timeline').empty();
    $('#products-in-cart').empty();

    $('#total-ccInteraction').text(0);
    $('#positive-cc').text(0);
    $('#negative-cc').text(0);
    $('#contract-cc').text(0);
    $('#last-call-hdr').text('No call-centre record');

    $('#next-best-offer').empty();

    $('#last-purchase-val').html(brand.currencySymbol() + ' ' + 0);
    $('#total-spent').html(0 + ' ' + brand.currencySymbol());
    $('#purchase-netcount').text(0);
    $('#prodview-summay').text(0);
    $('#purchase-avg-time').text('00:00');

    $('#purchased-product-ul').empty();
    $('#activities-ul').empty();

}


/** BRAND OBJECT **/
function Brand() {
    this.label = localStorage.getItem('brandName');
    this.logo = localStorage.getItem('brandlogo');
    this.banner = localStorage.getItem('brandhero');
    this.industry = localStorage.getItem('brandindustry');
    this.showProfileAttributes = localStorage.getItem('brandusecustomprofileattributes');
    this.currency = localStorage.getItem('brandcurrency');
}

Brand.prototype.currencySymbol = function () {
    return CURRENCY_MAP[this.currency] ? CURRENCY_MAP[this.currency] : this.currency;
};

Brand.prototype.display = function () {
    $("#brandlogo").attr("src", this.logo);
    $('#init-modal-header').text('Welcome to ' + this.label + ' Call Center');
    $(".sidebar").css("background-image", `url(${this.banner})`);

    if (localStorage.getItem("brandindustry") === "retail" && localStorage.getItem("brandusecustomprofileattributes") === "yes") {
        $('#shoe-size').css('display', 'block');
        $('#shirt-size').css('display', 'block');
        $('#preferred-color').css('display', 'block');
        $('#shoe-size-label').css('display', 'block');
        $('#shirt-size-label').css('display', 'block');
        $('#preferred-color-label').css('display', 'block');

    }

    if (this.industry === 'telco') {
        $('#churn-chart').css('display', 'block');
    } else if (this.industry === 'fmcg') {
        $('#fmcgAttributes').css('display', 'block');
        $('#fmcg--label').css('display', 'block');
    } else if (this.industry === 'fsi_bank') {
        $('#prediction-chart').css('display', 'block');
    }
}


/** CUSTOMER OBJECT **/
function Customer() {
    this.profilePicture = '';
    this.firstName = '';
    this.lastName = '';
    this.mobileNumber = '';
//    this.birthdate = '';
    this.email = '';
    this.address = {};
    this.gender = '';
    this.churnScore = '';
    this.predictionScore = '';
    this.optins = { 'email': '', 'phone': '', 'sms': '', 'directmail': '' };
    this.retailAttributes = { 'shoesize': '', 'shirtsize': '', 'preferredColor': '' };
    this.fmcgAttributes = { 'dairy': '', 'gluten': '', 'nuts': '', 'shellfish': '', 'soy': '' };
    this.searchParam = { 'id': '', 'value': '' };
}

Customer.prototype.fetchDetails = function () {
    customerObj = this;

    $.ajax({
        url: runtimeURL('PROFILE'),
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        data: {
            "eventId": encodeURI(customerObj.searchParam.value),
            "eventNS": customerObj.searchParam.id
        },
        success: function (response) {
            if (customerObj.setCustomerData(response)) {
                customerObj.display();
                activities.searchParam = customerObj.searchParam;
                activities.fetchDetails();
            }
        },
        error: function (response) {
            $('#busy-modal').css('display', 'none');

            showAlert({
                title: 'Error!',
                text: 'Technical error while fetching customer data.\n"' + customerObj.searchParam.id + '": "' + customerObj.searchParam.value + '"',
                icon: "error",
            });
            console.error('Error while fetching details : ' + JSON.stringify(response));
        }
    });
};

Customer.prototype.setCustomerData = function (runtime_response) {
    let profileKey;
    let customer;

    if (runtime_response.profileData.hasOwnProperty('statusCode')
        || runtime_response.profileData.hasOwnProperty('message')
        || runtime_response.profileData.hasOwnProperty('error_code')
        || runtime_response.profileData.hasOwnProperty('cause')
        || runtime_response.profileData.hasOwnProperty('retryAfterMs)')) {
        showAlert({
            title: 'Customer not found !',
            text: 'Unable to find customer data.\n"' + this.searchParam.id + '": "' + this.searchParam.value + '"',
            icon: "warning",
        });
        console.log('Error in setCustomerData: ' + JSON.stringify(runtime_response));
        $('#busy-modal').css('display', 'none');

        return false;
    } else {
        profileKey = Object.keys(runtime_response.profileData)[0];
        customer = runtime_response.profileData[profileKey].entity;

        this.profilePicture = customer.profilePictureLink;
        this.firstName = customer.person.name.firstName;
        this.lastName = customer.person.name.lastName;
        //console.log('customer birthDate: ' + JSON.stringify(customer));
        //this.birthdate = localStorage.getItem("birthday") + '-' + localStorage.getItem("birthmonth") + '-' + localStorage.getItem("birthyear");
        //this.birthdate = formatDate(customer.person.birthDate, 'dd/mm/yyyy');
        this.mobileNumber = customer.mobilePhone.number;
        this.email = customer.personalEmail.address;
        this.address = customer.homeAddress;
        this.gender = customer.person.gender;
        this.retailAttributes = customer._experienceplatform.retailSizes;
        this.fmcgAttributes = customer._experienceplatform.allergies;
        this.optins = (typeof customer.optInOut === 'undefined') ? '' : customer.optInOut._channels;
        this.churnScore = (typeof customer._experienceplatform.churnInformation === 'undefined') ? '' : customer._experienceplatform.churnInformation.churnScore;
        this.predictionScore = (typeof customer._experienceplatform.salesPrediction === 'undefined') ? '' : customer._experienceplatform.salesPrediction.mortgageLoanSalesPrediction;

        return true;
    }
};

Customer.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

Customer.prototype.genderDisplay = function () {
    return GENDER_MAP[this.gender] ? GENDER_MAP[this.gender] : this.gender;
};

Customer.prototype.display = function () {
    let churn_class = '';
    let churn_score = this.churnScore ? Number(this.churnScore) * 100 : 0;

    let prediction_class = '';
    let prediction_score = this.predictionScore ? Number(this.predictionScore) * 100 : 0;

    $('.user-photo').attr('src', this.profilePicture);
    $('#fullName').text(this.fullName());
    $('#gender').text(this.genderDisplay());
    $('#email').text(this.email);
    $('#phone').text(this.mobileNumber);
    $('#mobile-nm').text(this.mobileNumber);
//    $('#birthdate').text(formatDate(this.birthdate, 'dd/mm/yyyy'));
    $('#opt-in-email>i').attr('class', OPTIN_ICON[this.optins.email]);
    $('#opt-in-phone>i').attr('class', OPTIN_ICON[this.optins.phone]);
    $('#opt-in-sms>i').attr('class', OPTIN_ICON[this.optins.sms]);
    $('#opt-in-directmail>i').attr('class', OPTIN_ICON[this.optins.directMail]);


    $('#address').text(this.addressDisplay());

    $('#idValue').val($('#idValue').val());



    if (churn_score < 25)
        churn_class = 'c100 p' + Math.round(churn_score) + ' big center green';
    else if (churn_score > 24 && churn_score < 50)
        churn_class = 'c100 p' + Math.round(churn_score) + ' big center';
    else
        churn_class = 'c100 p' + Math.round(churn_score) + ' big center red';

    $('#churn-score').attr('class', churn_class);
    $('#churn-score>span').text(churn_score + ' %');

    if (prediction_score < 25)
        prediction_class = 'c100 p' + Math.round(prediction_score) + ' big center red';
    else if (prediction_score > 24 && prediction_score < 50)
        prediction_class = 'c100 p' + Math.round(prediction_score) + ' big center';
    else
        prediction_class = 'c100 p' + Math.round(prediction_score) + ' big center green';

    $('#prediction-score').attr('class', prediction_class);
    $('#prediction-score>span').text(prediction_score + ' %');

    if (localStorage.getItem("brandindustry") === "retail" && localStorage.getItem("brandusecustomprofileattributes") === "yes") {
        $('#shoe-size').text(this.retailAttributes["shoeSize"]);
        $('#shirt-size').text(this.retailAttributes["shirtSize"]);
        $('#preferred-color').text(this.retailAttributes["preferredColor"]);
    }

    if (localStorage.getItem('brandindustry') === 'fmcg') {
        $('#allergy-dairy>i').attr('class', ALLERGY_ICON[this.fmcgAttributes["dairy"]]);
        $('#allergy-nuts>i').attr('class', ALLERGY_ICON[this.fmcgAttributes["nuts"]]);
        $('#allergy-gluten>i').attr('class', ALLERGY_ICON[this.fmcgAttributes["gluten"]]);
        $('#allergy-shellfish>i').attr('class', ALLERGY_ICON[this.fmcgAttributes["shellfish"]]);
        $('#allergy-soy>i').attr('class', ALLERGY_ICON[this.fmcgAttributes["soy"]]);
    }



}

Customer.prototype.addressDisplay = function () {
    return this.address.street1 + ", " + this.address.city + ", " + this.address.country + ", " + this.address.postalCode;
}


/** EXPERIENCE EVENT OBJECT **/
function CustomerActivities() {
    this.productViews = { data: [] };
    this.addToCart = { data: [] };
    this.productPurchase = { data: [] };
    this.callCentre = { data: [] };
    this.chatbot = { data: [] };
    this.storeEntry = { data: [] };
    this.flightSearch = { data: [] };
    this.flightBooked = { data: [] };
    this.chatbotInteraction = { data: [] };
    this.mortgageLoanSimulation = { data: [] };
    this.testDrive = { data: [] };
    this.abandonedProduct = { data: [] };
    this.productTimeline = { data: [] };
    this.netPurchase = 0;
    this.lastPurchase = 0;
    this.avgCartToPurchase = '00:00';
    this.totalItemsPurchased = 0;
    this.searchParam = { 'id': '', 'value': '' };

    /*** THIS CAN BE CAPTURED FROM CACHE / RECOMMENDATION SERVICES ***/
    /*** AS OF NOW THIS IS HARDCODED ***/
    this.recommendations = { nextBestOffers: [] };
}

CustomerActivities.prototype.fetchDetails = function () {
    customerActivitesObj = this;

    $.ajax({
        url: runtimeURL('EXPERIENCE_EVENTS'),
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        data: {
            "eventId": encodeURI(customerActivitesObj.searchParam.value),
            "eventNS": customerActivitesObj.searchParam.id
        },
        success: function (response) {
            customerActivitesObj.setCustomerData(response);
            customerActivitesObj.display();
        },
        error: function (response) {
            $('#busy-modal').css('display', 'none');
            showAlert({
                title: 'Error!',
                text: 'Technical error while fetching customer activities data.\n"' + customerActivitesObj.searchParam.id + '": "' + customerActivitesObj.searchParam.value + '"',
                icon: "error",
            });
            console.error('Error in customerActivities.fetchDetails: ' + JSON.stringify(response));
        }
    });
};

CustomerActivities.prototype.setCustomerData = function (runtime_response) {
    let events;

    if (runtime_response.experienceEventData.hasOwnProperty('statusCode')
        || runtime_response.experienceEventData.hasOwnProperty('message')
        || runtime_response.experienceEventData.hasOwnProperty('error_code')
        || runtime_response.experienceEventData.hasOwnProperty('cause')
        || runtime_response.experienceEventData.hasOwnProperty('retryAfterMs)')) {
        showAlert({
            title: 'Customer not found !',
            text: 'Unable to find customer activities data.\n"' + this.searchParam.id + '": "' + this.searchParam.value + '"',
            icon: "warning",
        })
    } else {
        events = runtime_response.experienceEventData.children;
        this.parseActivities(events);
        this.recommendations = this.buildRecommendation();
    }
};

CustomerActivities.prototype.parseActivities = function (eventsData) {
    var interPayload = {};
    this.totalItemsPurchased = 0;
    this.netPurchase = 0;

    for (i in eventsData) {
        interPayload = {};

        if (eventsData[i].entity.hasOwnProperty('eventType')) {
            switch (eventsData[i].entity.eventType) {
                case 'callCenterInteraction':
                    interPayload = eventsData[i].entity._experienceplatform.callDetails;
                    interPayload['timestamp'] = eventsData[i].entity.timestamp;
                    interPayload['eventType'] = eventsData[i].entity.eventType;
                    this.callCentre.data.push(interPayload);
                    this.productTimeline.data.push(interPayload);
                    break;
                case 'chatbotInteraction':
                    let s = eventsData[i].entity._experienceplatform.chatbot.conversationStatus;
                    if (s == 'productInterest' || s == 'interestCategory') {
                        interPayload = eventsData[i].entity._experienceplatform.chatbot;
                        interPayload['timestamp'] = eventsData[i].entity.timestamp;
                        interPayload['eventType'] = eventsData[i].entity.eventType;
                        interPayload['product'] = eventsData[i].entity._experienceplatform.productData.productCategory  + (eventsData[i].entity._experienceplatform.productData.productName == 'undefined'? '': ' - '+ eventsData[i].entity._experienceplatform.productData.productName);
                        this.chatbot.data.push(eventsData[i].entity);
                        this.productTimeline.data.push(interPayload);
                    }
                    break;
                case 'storeEntry':
                    if (eventsData[i].entity._experienceplatform.storeEntry.brandName == brand.label) {
                        interPayload = eventsData[i].entity._experienceplatform.storeEntry;
                        interPayload['timestamp'] = eventsData[i].entity.timestamp;
                        interPayload['eventType'] = eventsData[i].entity.eventType;
                        this.storeEntry.data.push(interPayload);
                        this.productTimeline.data.push(interPayload);
                    }
                    break;
                case 'flightSearch':
                    interPayload = eventsData[i].entity._experienceplatform.flight;
                    interPayload['timestamp'] = eventsData[i].entity.timestamp;
                    interPayload['eventType'] = eventsData[i].entity.eventType;
                    this.flightSearch.data.push(interPayload);
                    this.productTimeline.data.push(interPayload);
                    break;
                case 'flightBooked':
                    interPayload = eventsData[i].entity._experienceplatform.flight;
                    interPayload['timestamp'] = eventsData[i].entity.timestamp;
                    interPayload['eventType'] = eventsData[i].entity.eventType;
                    this.flightBooked.data.push(interPayload);
                    this.productTimeline.data.push(interPayload);
                    break;
                case 'testDrive':
                    interPayload = eventsData[i].entity._experienceplatform.testDrive;
                    interPayload['timestamp'] = eventsData[i].entity.timestamp;
                    interPayload['eventType'] = eventsData[i].entity.eventType;
                    this.testDrive.data.push(interPayload);
                    this.productTimeline.data.push(interPayload);
                    break;
                case 'mortgageSimulationStep1':
                case 'mortgageSimulationStep2':
                    interPayload = eventsData[i].entity._experienceplatform.mortgageLoanSimulation;
                    interPayload['timestamp'] = eventsData[i].entity.timestamp;
                    interPayload['eventType'] = eventsData[i].entity.eventType;
                    this.mortgageLoanSimulation.data.push(interPayload);
                    this.productTimeline.data.push(interPayload);
                    break;
            }
        } else if (eventsData[i].entity.hasOwnProperty('_experienceplatform')) {
            if (eventsData[i].entity._experienceplatform.hasOwnProperty('productData')) {
                interPayload = eventsData[i].entity.productListItems[0];
                interPayload['eventType'] = eventsData[i].entity._experienceplatform.productData.productInteraction;
                interPayload['timestamp'] = eventsData[i].entity.timestamp;
                this.productTimeline.data.push(interPayload);
                switch (eventsData[i].entity._experienceplatform.productData.productInteraction) {
                    case 'productView':
                        this.productViews.data.push(interPayload);
                        break;

                    case 'productAddToCart':
                        this.addToCart.data.push(interPayload);
                        break;

                    case 'productPurchase':
                        this.productPurchase.data.push(interPayload);
                        this.totalItemsPurchased++;
                        this.netPurchase += (eventsData[i].entity.productListItems[0].priceTotal) ? Number(eventsData[i].entity.productListItems[0].priceTotal) : 0;
                }

            }
        }
    }

    this.cartAbandonment();

    if (this.productPurchase.data.length > 0)
        this.lastPurchase = this.productPurchase.data[0]['priceTotal'] ? this.productPurchase.data[0]['priceTotal'] : 0;
};

CustomerActivities.prototype.buildRecommendation = function () {
    return {
        nextBestOffers: [{
            productName: "Short",
            productPrice: "35",
            productImg: "https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/shorts-2.png",
            productSku: `FR${Math.round(Math.random() * 10000000)}`
        },
        {
            productName: "Sneakers",
            productPrice: "94",
            productImg: "https://acsdemoaccelerators.s3.amazonaws.com/accelerators/platform/call-center/img/sneakers.png",
            productSku: `FR${Math.round(Math.random() * 10000000)}`
        }
        ]
    };
};

CustomerActivities.prototype.cartAbandonment = function () {
    let avgCartToPurchaseTime = [];
    let t1, t2;
    let abandonCheck = true;

    for (var p in this.addToCart.data) {
        abandonCheck = true;
        for (var c in this.productPurchase.data) {
            if (this.addToCart.data[p]['SKU'] == this.productPurchase.data[c]['SKU']) {
                abandonCheck = false;

                try {
                    t1 = new Date(this.productPurchase.data[c]['timestamp']);
                    t2 = new Date(this.addToCart.data[p]['timestamp']);
                    avgCartToPurchaseTime.push((t1 - t2) / 1000);
                } catch (e) {
                    avgCartToPurchaseTime.push(0);
                }

                break;
            }
        }

        if (abandonCheck)
            this.abandonedProduct.data.push(this.addToCart.data[p]);
    }

    if (avgCartToPurchaseTime.length > 0) {
        let avgTimeInSecs = avgCartToPurchaseTime.reduce(function (total, currentValue, currentIndex, arr) {
            return total + currentValue
        }) / avgCartToPurchaseTime.length;
        this.avgCartToPurchase = ('0' + Math.floor(avgTimeInSecs / 60)).substr(-2) + ':' + ('0' + (avgTimeInSecs % 60)).substr(-2);
    }
};

CustomerActivities.prototype.display = function () {
    try {
        this.plotTimeline();
        this.showAbandonedProducts();
        this.showRecommendations();
        this.showCallInteractions();
        this.showPurchaseSummary();
        this.showPurchasedProducts();
        this.showDetailedActivities('');
        $('#activity-filter').val($("#activity-filter option:first").val());

        $('#busy-modal').css('display', 'none');
    } catch (e) {
        console.log(e);
        $('#busy-modal').css('display', 'none');
        showAlert({
            title: 'Error!',
            text: 'Technical error while plotting customer activities.\n"' + this.searchParam.id + '": "' + this.searchParam.value + '"',
            icon: "error",
        });
    }
};

CustomerActivities.prototype.plotTimeline = function () {
    let activityToDisplay;
    let price = 0;
    $('.timeline').empty();
    let badge, eventType, img, alt;

    for (i = 0; i < this.productTimeline.data.length; i++) {
        price = this.productTimeline.data[i]['priceTotal'] ? this.productTimeline.data[i]['priceTotal'] : '';
        eventType = this.productTimeline.data[i]['eventType'];

        switch (eventType) {
            case 'storeEntry':
                badge = 'store';
                img = STORE_IMG;
                alt = this.productTimeline.data[i]['location']
                break;
            case 'testDrive':
                badge = 'online-shop';
                img = TEST_DRIVE;
                alt = this.productTimeline.data[i]['testdriveCarType']
                break;
            case 'flightSearch':
                badge = 'online-shop';
                img = FLIGHT_SEARCH;
                alt = this.productTimeline.data[i]['flightDestination']
                break;
            case 'flightBooked':
                badge = 'online-shop';
                img = FLIGHT_BOOKED;
                alt = `${this.productTimeline.data[i]['flightDestination']} - ${this.productTimeline.data[i]['flightPrice']} ${brand.currencySymbol()}`
                break;
            case 'chatbotInteraction':
                console.log(JSON.stringify(this.productTimeline.data[i]));
                badge = 'online-shop';
                img = CHATBOT;
                alt = `${this.productTimeline.data[i]['product']}`
                break;
            case 'mortgageSimulationStep1':
            case 'mortgageSimulationStep2':
                badge = 'online-shop';
                img = MORTGAGE_SIMULATION;
                alt = this.productTimeline.data[i]['mortgageContext'];
                break;
            case 'callCenterInteraction':
                badge = 'call-center';
                alt = this.productTimeline.data[i]['callTopic'];
                img = CALLCENTER_IMG;
                break;
            default:
                badge = CHANNEL_TIMELINE_CLASS[this.productTimeline.data[i]['productAddMethod']];
                img = this.productTimeline.data[i]['product'];
                alt = this.productTimeline.data[i]['name'];

        }

        activityToDisplay = `<li class="timeline-item">
            <div class="timeline-badge ${badge}"><i class="glyphicon glyphicon-check"></i></div>
            <div class="timeline-panel">
            <div class="timeline-heading">
               <h4 class="timeline-title">${INTERACTION_TYPE_LABEL[this.productTimeline.data[i]['eventType']]}</h4>
               <h4 class="timeline-title">${formatDate(this.productTimeline.data[i]['timestamp'], 'mm/dd/yyyy @ time')}</h4>
               </div>
            <div class="timeline-body">`;

        activityToDisplay += `<p style="text-align:center;"><img src="${img}" alt="${alt}" style="border-radius:8px; max-height: 75px;" /></p>`;



        if (price > 0) {
            activityToDisplay += `<p class="price"><strong style="padding-right: 2px;color: #707070;">${brand.currencySymbol()} </strong>${price}</p>
               <!--<h3>${this.productTimeline.data[i]['name']}</h3>-->`;
        }
        activityToDisplay += `</div>
            </div>
         </li>`;

        $('.timeline').append(activityToDisplay);
    }
};

CustomerActivities.prototype.showAbandonedProducts = function () {
    let productToDisplay;
    let price;

    $('#products-in-cart').empty();

    if (this.abandonedProduct.data.length > 0) {
        for (i = 0; i < this.abandonedProduct.data.length; i++) {
            price = this.abandonedProduct.data[i]['priceTotal'] ? this.abandonedProduct.data[i]['priceTotal'] : 0;
//console.log('abandonned product' + JSON.stringify(this.abandonedProduct.data[i]));
            productToDisplay = `<div class="product">
                <img src="${this.abandonedProduct.data[i]['product']}" class="product-thumb" alt="${this.abandonedProduct.data[i]['name']}" style="border-radius:8px;">
                <p class="price">${brand.currencySymbol()} ${price}</p>
                <h3>${this.abandonedProduct.data[i]['name']}</h3>
                <p class="sku">${this.abandonedProduct.data[i]['SKU']}</p>
             </div>`;

            $('#products-in-cart').append(productToDisplay);
        }
    } else {
        $('#products-in-cart').append(`<div class="product"><i class="fa fa-thumbs-o-up green" aria-hidden="true" style="font-size: 56px;margin-left: 2em;margin-top: 0.8em;"></i></div>`);
    }
};

CustomerActivities.prototype.showCallInteractions = function () {
    let positiveCalls = 0;
    let negativeCalls = 0;
    let contractCalls = 0;
    let callcentreHdrMsg = '';

    this.callCentre.data.forEach(function (callRecord) {
        if (callRecord.callFeeling === 'positive')
            positiveCalls++;
        else if (callRecord.callFeeling === 'negative')
            negativeCalls++;

        if (callRecord.callTopic === 'contract')
            contractCalls++;
    });

    $('#total-ccInteraction').text(this.callCentre.data.length);
    $('#positive-cc').text(positiveCalls);
    $('#negative-cc').text(negativeCalls);
    $('#contract-cc').text(contractCalls);

    if (this.callCentre.data.length > 0)
        callcentreHdrMsg = 'Last call on ' + formatDate(this.callCentre.data[0]['timestamp'], 'mm/dd/yyyy time');
    else
        callcentreHdrMsg = 'No call-centre record';

    $('#last-call-hdr').text(callcentreHdrMsg);
};

CustomerActivities.prototype.showRecommendations = function () {
    let nextBestOffer;
    $('#next-best-offer').empty();

    this.recommendations.nextBestOffers.forEach(function (recommendation) {
        nextBestOffer = `<div class="product">
          <img src="${recommendation.productImg}" class="product-thumb" alt="${recommendation.productName}" style="border-radius:8px;" />
          <p class="price">${brand.currencySymbol()} ${recommendation.productPrice}</p>
          <h3>${recommendation.productName}</h3>
          <p class="sku">FR${Math.round(Math.random() * 10000000)}</p>
        </div>`;

        $('#next-best-offer').append(nextBestOffer);
    });
};

CustomerActivities.prototype.showPurchaseSummary = function () {
    let price = 0;
    if (this.productPurchase.data.length > 0) {
        price = this.productPurchase.data[0]['priceTotal'];
    }
    $('#last-purchase-val').html(brand.currencySymbol() + ' ' + Math.round(price));
    $('#total-spent').html(Math.round(this.netPurchase) + ' ' + brand.currencySymbol());
    $('#purchase-netcount').text(this.productPurchase.data.length);
    $('#prodview-summay').text(this.productViews.data.length);
    $('#purchase-avg-time').text(this.avgCartToPurchase);
};

CustomerActivities.prototype.showPurchasedProducts = function () {
    let purchasedProductItem;
    let price = 0;
    $('#purchased-product-ul').empty();

    this.productPurchase.data.forEach(function (product) {
        price = product.priceTotal ? product.priceTotal : 0;
        purchasedProductItem = `<li style="margin-bottom: 1em;max-height: 130px;">
                <div class="row">
                    <div class="purchased-product-img">
                        <img style="max-height: 128px;" src="${product['product']}" alt="${product['name']}">
                    </div>
                <div class="purchased-product-detail">
                    <div class="purchased-product-name"><span>${product['name']}</span></div>
                    <div class="purchased-product-date"><span>${formatDate(product['timestamp'], 'mm/dd/yyyy time')}</span></div>
                    <div class="purchased-product-price"><span><strong style="margin-right: 0.5em;color: #707070;">${brand.currencySymbol()}</strong>${price}</span></div>
                    <div class="purchased-channel"><span><strong style="margin-right: 0.5em;color: #707070;">CHANNEL:</strong>${product['productAddMethod']}</span></div>
                </div>
            </div>
        </li>`;

        $('#purchased-product-ul').append(purchasedProductItem);
    });
};

CustomerActivities.prototype.showDetailedActivities = function (activityFilter) {
    let activitySpecificRecords;
    let template;
    let price = 0;
    $('#activities-ul').empty();

    if (activityFilter === 'productViews' || activityFilter === 'addToCart') {
        if (activityFilter === 'productViews')
            activitySpecificRecords = this.productViews;
        else if (activityFilter === 'addToCart')
            activitySpecificRecords = this.addToCart;

        activitySpecificRecords.data.forEach(function (product) {
            price = product.priceTotal ? product.priceTotal : 0;

            template = `<li style="margin-bottom: 1em;max-height: 130px;">
                    <div class="row">
                        <div class="purchased-product-img">
                            <img style="max-height: 128px;" src="${product['product']}" alt="${product['name']}">
                        </div>
                    <div class="purchased-product-detail">
                        <div class="purchased-product-name"><span>${product['name']}</span></div>
                        <div class="purchased-product-date"><span>${formatDate(product['timestamp'], 'mm/dd/yyyy time')}</span></div>
                        <div class="purchased-product-price"><span><strong style="margin-right: 0.5em;color: #707070;">${brand.currencySymbol()}</strong>${price}</span></div>
                        <div class="purchased-channel"><span><strong style="margin-right: 0.5em;color: #707070;">CHANNEL:</strong>${product['productAddMethod']}</span></div>
                    </div>
                </div>
            </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'callCenterLogs') {
        activitySpecificRecords = this.callCentre;

        activitySpecificRecords.data.forEach(function (rec) {
            template = `<li style="margin-bottom: 1em;max-height: 130px;">
                    <div class="row">
                        <div class="purchased-product-img">
                            <span style="font-size: 1.5em;"><strong style="margin-right: 0.5em;color: #707070;">${rec['callInteractionType']}</strong></span>
                        </div>
                    <div class="purchased-product-detail">
                        <div class="purchased-product-name"><span>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span></div>
                        <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">SENSE: </strong>${CALLCENTER_RESPONSE_MAP.callFeeling[rec['callFeeling']]}</span></div>
                        <div class="purchased-product-price"><span><strong style="margin-right: 0.5em;color: #707070;">TOPIC: </strong>${CALLCENTER_RESPONSE_MAP.callTopic[rec['callTopic']]}</span></div>
                        <div class="purchased-channel" style="display: ${(rec['callTopic'] == 'contract') ? 'block' : 'none'};"><span><strong style="margin-right: 0.5em;color: #707070;">CONTRACT CANCEL: </strong>${CALLCENTER_RESPONSE_MAP.contractCancelled[rec['contractCancelled']]}</span></div>
                    </div>
                </div>
            </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'chatbotLogs') {
        activitySpecificRecords = this.chatbot;

        activitySpecificRecords.data.forEach(function (rec) {
            let productInfo = '';
            if (rec['_experienceplatform']['chatbot']['conversationStatus'] === 'productInterest') {
                productInfo = `<strong style="margin-right: 0.5em;color: #707070;">ABOUT: </strong> ${rec['_experienceplatform']['productData']['productName']}`;
            }

            if (rec['_experienceplatform']['chatbot']['conversationStatus'] === 'interestCategory') {
                productInfo = `<strong style="margin-right: 0.5em;color: #707070;">ABOUT: </strong> ${rec['_experienceplatform']['productData']['productCategory']}`;
            }

            template = `<li style="margin-bottom: 1em;max-height: 130px;">
                <div class="row" style="margin-left: 0.5em;">
                    <div class="purchased-product-img">
                        <span style="font-size: 1.2em;"><strong style="margin-right: 0.5em;color: #707070;">${CHATBOT_RESPONSE_MAP.conversationStatus[rec['_experienceplatform']['chatbot']['conversationStatus']]}</strong></span>
                    </div>
                    <div class="purchased-product-detail">
                        <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span> ${productInfo}</div>
                    </div>
                </div>
                </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'storeEntries') {
        activitySpecificRecords = this.storeEntry;

        activitySpecificRecords.data.forEach(function (rec) {
            template = `<li style="margin-bottom: 1em;max-height: 130px;">
            <div class="row" style="margin-left: 0.5em;">
                <div class="purchased-product-img">
                    <span style="font-size: 1.2em;"><strong style="margin-right: 0.5em;color: #707070;">Store: ${rec.location} - ${rec.storeName}</strong></span>
                </div>
                <div class="purchased-product-detail">
                    <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span></div>
                </div>
            </div>
            </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'flightSearch') {
        activitySpecificRecords = this.flightSearch;

        activitySpecificRecords.data.forEach(function (rec) {
            template = `<li style= "margin-bottom: 1em;max-height: 130px;">
            <div class="row" style="margin-left: 0.5em;">
                <div class="purchased-product-img">
                    <strong>Price:</strong> <span id="price">${brand.currencySymbol()} ${rec.flightPrice}</span>
                    <br>
                    <span"><strong style="margin-right: 0.5em;color: #707070;">${rec.flightOrigin} to  ${rec.flightDestination}</strong> (${rec.flightCabin})</span><br />
                    <span><strong>Departure:</strong> ${formatDate(rec.flightDepartureDate, 'mm/dd/yyyy')}, <strong>Return:</strong> ${formatDate(rec.flightReturnDate, 'mm/dd/yyyy')}</span><br />
                    <span><strong>Passengers:</strong> <span id="adults">${rec.flightPaxAdu}</span> adults, <span id="children"> ${rec.flightPaxChd}</span> children and <span id="infants">${rec.flightPaxInf}</span> infants</span>
                </div>
                <div class="purchased-product-detail">
                     <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span></div>
                 </div>
            </div>
        </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'flightBooked') {
        activitySpecificRecords = this.flightBooked;
        activitySpecificRecords.data.forEach(function (rec) {
            template = `<li style= "margin-bottom: 1em;max-height: 130px;">
            <div class="row" style="margin-left: 0.5em;">
                <div class="purchased-product-img">
                    <strong>PNR:</strong> <span id="pnr">${rec.flightPNR}</span> -  <strong>Price:</strong> <span id="price">${brand.currencySymbol()} ${rec.flightPrice}</span>
                    <br>
                    <span ><strong style="margin-right: 0.5em;color: #707070;">${rec.flightOrigin} to  ${rec.flightDestination}</strong> (${rec.flightCabin})</span><br />
                    <span ><strong>Departure:</strong> ${formatDate(rec.flightDepartureDate, 'mm/dd/yyyy')}, <strong>Return:</strong> ${formatDate(rec.flightReturnDate, 'mm/dd/yyyy')}</span><br />
                    <span ><strong>Passengers:</strong> <span id="adults">${rec.flightPaxAdu}</span> adults, <span id="children"> ${rec.flightPaxChd}</span> children and <span id="infants">${rec.flightPaxInf}</span> infants</span>
                </div>
                <div class="purchased-product-detail">
                    <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span></div>
                </div>
            </div>
        </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'testDrive') {
        activitySpecificRecords = this.testDrive;

        activitySpecificRecords.data.forEach(function (rec) {
            template = `<li style="margin-bottom: 1em;max-height: 130px;">
                <div class="row" style="margin-left: 0.5em;">
                    <div class="purchased-product-img">
                        <span style="font-size: 1.2em;"><strong style="margin-right: 0.5em;color: #707070;">Car Type: ${rec.testdriveCarType}</strong></span>
                    </div>
                    <div class="purchased-product-detail">
                        <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${rec.testdriveDate} @ ${rec.testdriveTime}, in ${rec.testdriveDealer}</span></div>
                    </div>
                </div>
                </li>`;

            $('#activities-ul').append(template);
        });
    } else if (activityFilter === 'mortgageLoanSimulation') {
        activitySpecificRecords = this.mortgageLoanSimulation;

        activitySpecificRecords.data.forEach(function (rec) {
            let step = (rec.eventType === 'mortgageSimulationStep1') ? 1 : 2;
            template = `<li style="margin-bottom: 1em;">
                <div class="row" style="margin-left: 0.5em;">
                    <div class="purchased-product-img" style="text-align:left">
                        <span style="font-size: 1.2em;"><strong style="margin-right: 0.5em;color: #707070;">Mortgage Simulation (${step}/2)</strong></span>
                        <br>
                        <span><strong style="margin-right: 0.5em;color: #707070;">Has Mortgage:</strong> ${rec.mortgageAlready} - <strong style="margin-right: 0.5em;color: #707070;">Goal:</strong> ${rec.mortgageGoal}</span><br />
                        <span><strong style="margin-right: 0.5em;color: #707070;">Context:</strong> ${rec.mortgageContext} - <strong style="margin-right: 0.5em;color: #707070;">Deposit:</strong> ${rec.mortgageDeposit}</span><br />
                        <span><strong style="margin-right: 0.5em;color: #707070;">Property price:</strong> ${rec.mortgagePropertyPrice} - <strong style="margin-right: 0.5em;color: #707070;">Term:</strong> ${rec.mortgageTerm}</span><br />`;

            if (step == 2) {
                template += `<span ><strong style="margin-right: 0.5em;color: #707070;">Nb of Applicants:</strong> ${rec.mortgageApplicants} - <strong style="margin-right: 0.5em;color: #707070;">Annual net income:</strong> ${rec.mortgageAnnualIncome}</span><br />
                <span><strong style="margin-right: 0.5em;color: #707070;">Other loans:</strong> ${rec.mortgageOtherLoanRepayments} - <strong style="margin-right: 0.5em;color: #707070;">Credit card balance:</strong> ${rec.mortgageCCBalance}</span><br />
                <span><strong style="margin-right: 0.5em;color: #707070;">Dependents under 18:</strong> ${rec.mortgageDependentsU18} - <strong style="margin-right: 0.5em;color: #707070;">Dependents over 18:</strong> ${rec.mortgageDependentsO18}</span><br />`;
            }


            template += `</div>
                <div class="purchased-product-detail">
                <div class="purchased-product-date"><span><strong style="margin-right: 0.5em;color: #707070;">ON: </strong>${formatDate(rec['timestamp'], 'mm/dd/yyyy time')}</span></div>
                </div>
            </div>
            </li>`;

            $('#activities-ul').append(template);
        });
    }



};

function initCallcentreDisplay(searchKey) {
    $('#busy-modal').css('display', 'block');

    try {
        //  resetPageData();
        customer.searchParam = searchKey;
        customer.fetchDetails();

    } catch (e) {
        $('#busy-modal').css('display', 'none');
        showAlert({
            title: 'Error!',
            text: 'Technical error while processing request.\n"' + searchKey.id + '": "' + searchKey.value + '"',
            icon: "error",
        });
    }
}