function _get_URL(keywords){
		var s = keywords.split(" ");
		var printer="";
		for (var i=0; i<s.length;i++){
			printer += s[i] + "%20";
		}

		return printer;
	}

	// Parse the response and build an HTML table to display search results
	function _cb_findItemsByKeywords(root) {
	  var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
	  //var html = [];
	  //html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
	  //for (var i = 0; i < items.length; ++i) {
	    var item     = items[0];
	    var title    = item.title;
	    var pic      = item.galleryURL;
	    var viewitem = item.viewItemURL;
	    if (null != title && null != viewitem) {
	     // html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
	      //'<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
		 console.log(title);
	    }
	 // }
	  //html.push('</tbody></table>');
	  //document.getElementById("results").innerHTML = html.join("");
	}  // End _cb_findItemsByKeywords() function
		// Construct the request
	// Replace MyAppID with your Production AppID
	var url = "http://svcs.ebay.com/services/search/FindingService/v1";
	    url += "?OPERATION-NAME=findItemsByKeywords";
	    url += "&SERVICE-VERSION=1.0.0";
	    url += "&SECURITY-APPNAME=Universi-1836-4b8c-971e-69b21de950bb";
	    url += "&GLOBAL-ID=EBAY-US";
	    url += "&RESPONSE-DATA-FORMAT=JSON";
	    url += "&callback=_cb_findItemsByKeywords";
	    url += "&REST-PAYLOAD";
	    var k = _get_URL(:"lol okay");
	    url += "&keywords="+k;
	    console.log(k);
	    url += "&paginationInput.entriesPerPage=1";

	    // Submit the request
		s = document.createElement('script'); // create script element
		s.src = url;
		document.body.appendChild(s);
