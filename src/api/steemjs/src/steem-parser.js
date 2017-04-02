/**
 * Created by matias on 27/03/17.
 */

/* ACCOUNT */

function computeAccount(accountReceived, steemFormatter, accountName) {

    var account = {};
    var accountJsonObject = JSON.parse(accountReceived.json_metadata) || {};

    // Reputation on 100
    account.reputation = steemFormatter.reputation(accountReceived.reputation);

    // Set account created date
    account.created = accountReceived.created;

    // Post number
    account.postCount =  accountReceived.post_count;

    // Voting power on 100
    account.votingPower =  accountReceived.voting_power/100;

    // last post
    account.lastPostTime =  accountReceived.last_post;

    // last vote
    account.lastVoteTime =  accountReceived.last_vote_time;

    // last interaction
    account.lastInteraction =  accountReceived.last_bandwidth_update;

    // Set account STEEM
    account.steemNumber =  accountReceived.balance.replace(' STEEM', '');

    // Set account VEST (Steem power)
    account.vestNumber =  accountReceived.vesting_shares.replace(' VESTS', '');

    // Set account SBD (Steem dolar)
    account.sbdNumber =  accountReceived.savings_sbd_balance.replace(' SBD', '');

    // Set posts number (post, comment)
    account.postNumber =  accountReceived.post_count;

    // Set tabs options
    if(typeof accountJsonObject.profile.tabs_options === 'undefined'){

        if(accountName == 'esteem8') {

            account.tabsOptions =  JSON.parse('{"about": {}, "posts": {}, "replies": {}, "history": {"display": "none"}, "follower": {}, "following": {}}');
        }else {
            account.tabsOptions =  '';
        }
    }

    // Set first pinned post
    if(typeof accountJsonObject.profile.pinned_post === 'undefined'){

        if(accountName == 'esteem8') {

            account.pinnedPost =  'esteem8/@esteem8/esteem8-hypesquade';
        }else {
            account.pinnedPost =  '';
        }

    }else {

        account.pinnedPost =  accountJsonObject.profile.pinned_post;
    }

    // Set pinned post array
    if(typeof accountJsonObject.profile.pinned_posts === 'undefined'){

        if(accountName == 'esteem8') {
            // Nested menu support later
            account.pinnedPosts =  JSON.parse('[{"name": "Ask & Chat", "posts": ["steem/@esteem8/esteem8-community-questions", "esteem8-chat/@esteem8/esteem8-community-chat"]}, {"name": "Feedback", "posts": ["esteem8/@esteem8/esteem8-community-feedback"]}, {"name": "Purpose", "posts": ["steem/@esteem8/esteem8-community-proposals"]}, {"name": "Contribute", "posts": ["esteem8/@esteem8/how-to-support-esteem8", "esteem8/@esteem8/how-to-develop-a-new-feature"]}]');
        }else {
            account.pinnedPosts =  '';
        }

    }else {

        account.pinnedPosts =  JSON.parse(accountJsonObject.profile.pinned_posts);
    }

    // Set pinned files array
    if(typeof accountJsonObject.profile.shared_files === 'undefined') {

        if(accountName == 'esteem8') {

            account.sharedFiles = JSON.parse('[{"name": "ESTEEM8 Logo", "id": "1", "content": "https://github.com/esteem8app/esteem8app.github.io/blob/master/logo/Esteem8%20logo%20center%203.png?raw=true", "manualTags": ["es8","logo","red","/esteem8"],"defaultTags": ["github.com","media","image","images","photo","photos"],"image": "https:\/\/github.com\/esteem8app\/esteem8app.github.io\/blob\/master\/logo\/Esteem8%20logo%20center.png?raw=true"}]');
        }else {

            account.sharedFiles = [];
        }

    }

    // Shared articles
    if(typeof accountJsonObject.profile.shared_articles === 'undefined') {

        if(accountName == 'esteem8') {

            account.sharedArticles = JSON.parse('[{"name": "ESTEEM8 Logo", "id": "1", "shortDescription": "A free logo", "longDescription": "An amazing free logo", "options": [{"name": "color", "variants": [{"type": "red", "stock": "42"}, {"type": "purple", "stock": "42"}]}], "price": {"value": "0", "type": "STEEM"}, "tags": ["branding"], "contents": ["https:\/\/github.com\/esteem8app\/esteem8app.github.io\/blob\/master\/logo\/Esteem8%20logo%20center.png?raw=true", "https:\/\/github.com\/esteem8app\/esteem8app.github.io\/blob\/master\/logo\/Esteem8%20logo%20center%203.png?raw=true"], "stock": "42"}]');
        }else {

            account.sharedArticles = [];
        }

    }

    // Shared categories
    if(typeof accountJsonObject.profile.shared_categories === 'undefined') {

        if(accountName == 'esteem8') {

            account.sharedCategories = JSON.parse('[{"name":"branding","color":"#3f51b5","textColor":"#eeeeee","colorName":"Indigo","parent":""}, {"name":"logo","color":"#3f51b5","textColor":"#eeeeee","colorName":"Indigo","parent":"branding"}, {"name":"other","color":"#3f51b5","textColor":"#eeeeee","colorName":"Indigo","parent":""}]');
        }else {

            account.sharedCategories = [];
        }

    }

    // Set profile image
    if(typeof accountJsonObject.profile.profile_image === 'undefined'){

        account.profileImage =  '';
    }else {

        account.profileImage =  accountJsonObject.profile.profile_image;
    }


    // Set cover image
    if(typeof accountJsonObject.profile.cover_image === 'undefined'){

        account.coverImage =  '';
    }else {

        account.coverImage =  accountJsonObject.profile.cover_image;
    }

    // Set website
    if(typeof accountJsonObject.profile.website === 'undefined'){

        account.website =  '';
    }else {

        account.website = accountJsonObject.profile.website;
    }

    // Set other accounts
    if(typeof accountJsonObject.profile.web_links === 'undefined'){

        if(accountName == 'esteem8') {

            account.webLinks = JSON.parse('["https://github.com/esteem8", "https://discordapp.com/invite/5nqRwbf"]');
        }else {

            account.webLinks = {};
        }
    }else {

        account.webLinks = JSON.parse(accountJsonObject.profile.web_links);
    }

    // Set custom values
    if(typeof accountJsonObject.profile.custom_values === 'undefined'){

        if(accountName == 'esteem8') {

            account.customValues = JSON.parse('[{"name": "Product type", "value": "Application"}, {"name": "Software type", "value": "Open-source"}, {"name": "Organization type", "value": "Decentralized"}]');
        }else {

            account.customValues = {};
        }
    }else {

        account.customValues = JSON.parse(accountJsonObject.profile.custom_values);
    }

    // Set location
    if(typeof accountJsonObject.profile.location === 'undefined'){

        account.location = '';
    }else {

        account.location =  accountJsonObject.profile.location;
    }

    // Set about
    if(typeof accountJsonObject.profile.about === 'undefined'){

        account.about = '';
    }else {

        account.about =  accountJsonObject.profile.about;
    }


    return account;

}

/* POSTS */

function computePost(postRecieved) {

    var post = {};

    // Add images & tags
    if(typeof postRecieved.json_metadata !== 'undefined'){

        var objectFromJson = {};

        objectFromJson = JSON.parse(postRecieved.json_metadata) || {};

        if(typeof objectFromJson.image !== 'undefined'){

            post.images = objectFromJson.image;
        }

        if(typeof objectFromJson.tags !== 'undefined'){

            var tags = objectFromJson.tags;
            // Remove the first tag because it's displayed as category
            tags.shift();
            post.tags = tags;
        }
    }

    // Set images empty if null
    if(typeof post.images === 'undefined'){
        post.images = [];
    }

    // Set tags empty if null
    if(typeof post.tags === 'undefined'){
        post.tags = [];
    }

    post.body = postRecieved.body;

    post.category = postRecieved.category;
    post.title = postRecieved.title;
    post.author = postRecieved.author;
    post.dollarValue =
        parseFloat(postRecieved.pending_payout_value.split(" ")[0]) +
        parseFloat(postRecieved.total_payout_value.split(" ")[0]) +
        parseFloat(postRecieved.curator_payout_value.split(" ")[0]);
    post.net_votes = postRecieved.net_votes;
    post.children = postRecieved.children;
    post.activeVotes = postRecieved.active_votes;
    post.created = postRecieved.created;
    post.url = postRecieved.url;

    return post;
}

function computePosts(content) {

    var posts = [];

    // Add each post to an array because post are object's properties
    for (var key in content) {
        // skip loop if the property is from prototype
        if (!content.hasOwnProperty(key)) continue;

        var postRecieved = content[key];

        var post = computePost(postRecieved);

        // Push post in array
        posts.push(post);
    }

    return posts;
}

/* POSTS WITH ACCOUNTS */

function computePostsWithAccount(posts, account) {

}

/* HISTORY EVENTS */

function computeEvents(events) {

    var length = events.length;

    var computedEvents = [];

    // Compute each event
    for(var i = 0; i < length; i++) {

        var event = events[i][1];

        // Default value
        var when = event.timestamp;
        var what = 'what undefined';
        var who = 'who undefined';
        var atLink = 'atLink undefined';
        var atName = 'atNam undefined';

        // Operation
        var opName = event.op[0];
        var opObject = event.op[1];

        // Compute depend operation type
        switch(opName) {
            case 'vote':

                // Vote compute
                what = 'upvote';
                who = opObject.voter;
                atLink = '@' + opObject.author + '/' + opObject.permlink;
                atName = '@' + opObject.author + '/' + opObject.permlink.replace(/-/g, ' ');
                break;
            case 'comment':

                // Comment compute
                what = 'replied to';
                who = opObject.author;
                atLink = '@' + opObject.parent_userName + '/' + opObject.parent_permlink;
                atName = opObject.parent_permlink.replace(/-/g, ' ');
                break;
            case 'curation_reward':

                // Curation reward compute
                what = 'get rewarded for curation';
                who = opObject.curator;
                atLink = '@' + opObject.comment_userName + '/' + opObject.comment_permlink;
                atName = opObject.comment_permlink.replace(/-/g, ' ');
                break;
            case 'account_witness_vote':

                // Witness account vote
                what = 'recieved the witness vote of ';
                who = opObject.witness;
                atLink = '/@' + opObject.account + '/';
                atName = '@' + opObject.account;
                break;
            case 'feed_publish':
                break;
            case 'author_reward':
                break;
        }

        // Put computed properties into an object
        var computedEvent = {
            who: who,
            what: what,
            atLink: atLink,
            atName: atName,
            when: when
        };

        //Put object into an array
        computedEvents.push(computedEvent);
    }

    //Revert array
    computedEvents.reverse();

    return computedEvents;

}

/* REPLIES */

function computeReplies(replies) {

    // Computed replies
    var computedReplies = [];

    // Process each replies
    for(var i = 0; i < replies.length;i++) {

        // Process one reply
        var reply = replies[i];


        // Displayed data
        var titleArray = reply.parent_permlink.split('-');
        titleArray.splice(-1,1);
        var title = titleArray.join(' ').replace(/ re /g, ' -> ');

        var computedReply = {
            author: '@' + reply.author,
            created: reply.created,
            title: title,
            body: reply.body,
            votes: reply.net_votes,
            dollarValue: parseInt(reply.total_payout_value.split(' ')[0]) + parseInt(reply.total_pending_payout_value.split(' ')[0]),
            replies: reply.children,

            // Data to query reply of reply
            permlink: reply.permlink,
            authorName: reply.author
        };

        // Push completed reply
        computedReplies.push(computedReply);

    }

    return computedReplies;

}