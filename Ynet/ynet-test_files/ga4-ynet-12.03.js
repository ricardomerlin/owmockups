window.pushGa4DataLayer = (e, eventData) => {
	let dataToCollect = {};
	let el = e.target;
	while (el) {
		dataToCollect = Object.keys(el.dataset)
			.filter((key) => key.startsWith("yitan"))
			.reduce((obj, key) => {
				if (!obj[key]) {
					obj[key] = el.dataset[key];
				}
				return obj;
			}, {});
		if (Object.keys(dataToCollect).length) {
			Object.keys(dataToCollect).forEach((key) => {
				const newKey = key
					.replace(/([A-Z])/g, "_$1")
					.toLowerCase()
					.replace("yitan_", "");
				dataToCollect[newKey] = dataToCollect[key];
				delete dataToCollect[key];
			});
		}
		const nextEl = el.closest("[data-yitan-dc_path]");
		if (nextEl === el) {
			break;
		}
		el = nextEl;
	}
	dataToCollect["event_timestamp"] = new Date()
		.toISOString()
		.replace("T", " ")
		.replace("Z", " UTC");
	window.dataLayer.push({ ...dataToCollect, ...eventData });
};
window.addEventListener("load", () => {
	const dataLayerToGaDict = {
		contentPageType: "page_type",
		dcPath: "dc_path",
		userId: "yid"
	};
	const getYitanDataset = (ds) => {
		let articleYitanAttributes = {};
		for (att in ds) {
			if (att.indexOf("yitan") != -1) {
				const fixedAtt = att.slice(5).toLowerCase();
				gaAttr = dataLayerToGaDict[fixedAtt] || fixedAtt;
				articleYitanAttributes = {
					...articleYitanAttributes,
					[gaAttr]: ds[att],
				};
			}
		}
		return articleYitanAttributes;
	};
	const bodyDataset = document.body.dataset;
	const hContainer = document.getElementsByClassName("hContainer");
	const mContainer = document.getElementsByClassName("mContainer");
	const container = hContainer ? hContainer[0] : mContainer[0];
	function adBlockNotDetected() {
		window.hosemAds = false;
	}
	function adBlockDetected() {
		window.hosemAds = true;
	}
	if (typeof blockAdBlock === "undefined") {
		adBlockDetected();
	} else {
		blockAdBlock.onDetected(adBlockDetected);
		blockAdBlock.onNotDetected(adBlockNotDetected);
		blockAdBlock.on(true, adBlockDetected);
		blockAdBlock.on(false, adBlockNotDetected);
		blockAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
	}


	if (window.dcCG != "article") { 
		const topStoryMulti = document.querySelector(".TopStory1280Componenta.Multi");
		const isMagazine = topStoryMulti && topStoryMulti.classList.contains("magazine");
		const isDark = topStoryMulti && topStoryMulti.classList.contains("dark") && !isMagazine;
		const isSubstrip = topStoryMulti && topStoryMulti.classList.contains("moreArticle");
		const topStoryBackground = isMagazine ? "wide_photo" : isDark ? "black" : "white";
		const topStoryContent = topStoryMulti && topStoryMulti.classList.contains("blogItems") ? "blogs" : "article";
		window.dataLayer.push({
			...getYitanDataset(bodyDataset),
			...getYitanDataset(container.dataset),
			ad_blocker: !!window.hosemAds ? "true" : "false",
			date_modified: window.dataLayer[0].dateModified,
			date_published: window.dataLayer[0].datePublished,
			event: "page_view",
			top_story_type: isSubstrip ? "sub_strips" : "regular",
			top_story_background: topStoryBackground,
			top_story_content: topStoryContent,
		});                
	} else {
		window.dataLayer.push({
			...getYitanDataset(bodyDataset),
			...getYitanDataset(container.dataset),
			ad_blocker: !!window.hosemAds ? "true" : "false",
			comments_count: window.wcmNumOfComments ? window.wcmNumOfComments : 0,
			date_modified: window.dataLayer[0].dateModified,
			date_published: window.dataLayer[0].datePublished,
			event: "page_view",
		});
	}
});
function radio_events_func() {
	setTimeout(() => {
		let firstTimePlayed = {};
		document
			.querySelectorAll(
				".radio-player-button, .audio-play-button, .floating-player-button, .go-live-btn, .start-over-btn"
			)
			.forEach((elem) => {
				elem.addEventListener("click", function (event) {
					let action = "";
					let float_text = "notFloatingPlayer";
					let title = "";
					let time = "";
					if (elem.className.indexOf("radio-player-button") > -1) {
						title = document.querySelector(
							".radio-player-show-title"
						).innerText;
						time = document.querySelector(".radio-player-show-time")
							? document.querySelector(".radio-player-show-time").innerText
							: "";
					} else if (elem.className.indexOf("audio-play-button") > -1) {
						title = document.querySelector(".box-title").innerText;
					} else {
						title = document.querySelector(
							".floating-player-show-title"
						).innerText;
						time = document.querySelector(".floating-player-show-time")
							? document.querySelector(".floating-player-show-time").innerText
							: "";
						float_text = "FloatingPlayer";
					}
					if (
						elem.className.indexOf("go-live-btn") > -1 ||
						elem.className.indexOf("start-over-btn") > -1
					) {
						if (elem.className.indexOf("start-over-btn") > -1) {
							action = "Start over";
						} else {
							action = "Back to live broadcast";
						}
					}
					if (
						elem.className.indexOf("floating-player-button") > -1 ||
						elem.className.indexOf("radio-player-button") > -1 ||
						elem.className.indexOf("audio-play-button") > -1
					) {
						if (!firstTimePlayed.hasOwnProperty(title)) {
							firstTimePlayed[title] = false;
						}
						if (firstTimePlayed[title]) {
							action = "Resume";
						} else {
							action = "Play- Radio Starts";
							firstTimePlayed[title] = true;
						}
						if (elem.children[0].className.indexOf("pause") > -1) {
							action = "Pause";
						}
					}
					if (window.sendGa4Event) {
						sendGa4Event(action, event);
					}
				});
			});
	}, 2000);
	window.sendGa4Event = (action, event) => {
		const gtag = (pushObj) => {
			dataLayer.push(pushObj);
		};
		let data = {};
		if (
			action == "Play- Radio Starts" ||
			action == "Resume" ||
			action == "Start over" ||
			action == "Back to live broadcast"
		) {
			if (!window.collectGa4DataFromDomElements) return;
			data = window.collectGa4DataFromDomElements(event);
			data["event"] = "radio_stream_start";
			gtag(data);
			window.radioStreamIntervalId = setInterval(() => {
				gtag({ ...data, event: "radio_stream_interval" });
			}, 60000);
		} else if (window.radioStreamIntervalId) {
			clearInterval(window.radioStreamIntervalId);
		}
	};
	const onDvrBtnPressed = (event) => {
		let title = document.querySelector(".floating-player-show-title").innerText;
		let time = document.querySelector(".floating-player-show-time")
			? document.querySelector(".floating-player-show-time").innerText
			: "";
		let float_text = "FloatingPlayer";
		let action = "";
		if (event.type === "dvrRadioPlayerToPlayBack") {
			action = "Start over";
		} else {
			action = "Back to live broadcast";
		}
		if (window.sendGa4Event) window.sendGa4Event(action);
	};
	document.addEventListener("dvrRadioPlayerToLive", (e) => onDvrBtnPressed(e));
	document.addEventListener("dvrRadioPlayerToPlayBack", (e) =>
		onDvrBtnPressed(e)
	);
	document.addEventListener("radioFlashChange", (e) => {
		if (e.detail.isPlaying) {
			const { title, hideHours, endTime, startTime } = e.detail.program;
			const float_text = document.querySelector(".radio-floating-player.show")
				? "floatingPlayer"
				: "notFloatingPlayer";
			const time = hideHours ? "" : `${endTime} - ${startTime}`;
			action = "Play- Radio Starts";
			if (window.sendGa4Event) window.sendGa4Event(action);
		}
	});
}
window.addEventListener("load", () => {
	const yplusArticle = document.querySelector(".articleContainer.yplus");
	if (!yplusArticle) return;
	const dataLayerToGaDict = {
		contentPageType: "page_type",
		dcPath: "dc_path",
		userId: "yid",
	};
	const getYitanDataset = (ds) => {
		let articleYitanAttributes = {};
		for (att in ds) {
			if (att.indexOf("yitan") != -1) {
				const fixedAtt = att.slice(5).toLowerCase();
				gaAttr = dataLayerToGaDict[fixedAtt] || fixedAtt;
				articleYitanAttributes = {
					...articleYitanAttributes,
					[gaAttr]: ds[att],
				};
			}
		}
		return articleYitanAttributes;
	};
	const bodyDataset = document.body.dataset;
	const hContainer = document.getElementsByClassName("hContainer");
	const mContainer = document.getElementsByClassName("mContainer");
	const container = hContainer ? hContainer[0] : mContainer[0];
	window.dataLayer.push({
		...getYitanDataset(bodyDataset),
		...getYitanDataset(container.dataset),
		articleStatus: document.getElementById("piano-container-article")
			? "Close"
			: "Open",
		event: "articleStatus",
		date_modified: window.dataLayer[0].dateModified,
		date_published: window.dataLayer[0].datePublished,
	});
});
(function () {
	function get_article_id(link) {
		let a_link = link.querySelector("a").href;
		let split_link = a_link.split("/");
		let destination_article_id = a_link.includes("article") ? split_link[split_link.length - 1] : "";
		if  (destination_article_id != "" && destination_article_id.includes("autoplay")) {
			let splitted_a = destination_article_id.split("#");
			destination_article_id = splitted_a[0];
		}
		return destination_article_id;
	}
	function get_date_format(new_date) {
		try {
			if (isDateValid(new_date) != true) {
				let dateArray = new_date.split(".");
				fdate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
			}
			let new_title_date = new Date(fdate);
			fdate = new_title_date.toISOString();
			let local_date = new Date(fdate);
			const toISOStringWithTimezone = (date) => {
				const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
				return (
					date.getFullYear() +
					"-" +
					pad(date.getMonth() + 1) +
					"-" +
					pad(date.getDate()) +
					" " +
					pad(date.getHours()) +
					":" +
					pad(date.getMinutes()) +
					":" +
					pad(date.getSeconds())
				);
			};
			fdate = toISOStringWithTimezone(local_date);
		} catch (error) {
			console.error(error);
			fdate = "";
		}
	}
	function ynet_category_search() {
		window.$(".mainNav").on("click", "span", function () {
			const innerText = window.$(this).text();
			let page_type =
				window.dcCG == "home"
					? "Home Page"
					: window.dcCG == "main"
					? "Category page"
					: window.dcCG == "article"
					? "article"
					: "Subcategory page";
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
					event: "content_click",
					page_type: page_type,
					click_text: window.$(this).text(),
					content_type: innerText == "חיפוש" ? "search" : "menu",
					componenta_name: "header",
					position_in_componenta: 0,
					click_destination: window.$(this).parent().attr('href')
				});
			}
		});
		// task 16863
		window.$(".categorySubNavigation").on("click", "a", function () {
			let page_t = window.dcCG == "home" ? "Home Page" : (window.dcCG == "main" ? "Category page" : "Subcategory page") ;
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
					event: "content_click",
					page_type: page_t,
					click_text: window.$(this).text(),
					content_type: "menu",
					componenta_name: "category subnavigation",
					position_in_componenta: 0,
					click_destination: window.$(this).attr('href')
				});
			}
		});	
		// end task 16863
		window.$(".linksGroups").on("click", "span", function () {
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
					event: "content_click",
					page_type: "category page",
					click_text: window.$(this).text(),
					content_type: "menu",
					componenta_name: "Side Menu",
					position_in_componenta: 0,
					click_destination: window.$(this).parent().attr('href')
				});
			}
		});
	}
	function ynet_flashes_redmail_weather_icons() {
		const header_events = document.querySelectorAll(
			".WeatherViewInHeader, .headerIcon.flash, .flashText, .headerIcon.redMail, .redMailText"
		);
		let h_event = Array.from(header_events);
		for (let i in h_event) {
			let contentType = "menu";
			h_event[i].addEventListener("click", function (event) {
				let title_header;
				let click_destination = h_event[i].parentNode.href;
				if (h_event[i].classList.contains("WeatherViewInHeader")) {
					title_header = "מזג אוויר";
					click_destination = h_event[i].querySelector("a").href;
				} else if (
					h_event[i].classList.contains("flash") ||
					h_event[i].classList.contains("flashText")
				) {
					title_header = "מבזקים";
				} else if (
					h_event[i].classList.contains("redMail") ||
					h_event[i].classList.contains("redMailText")
				) {
					title_header = "מייל אדום";
					contentType = "redmail";
				}
				let page_type =
					window.dcCG == "home"
						? "Home Page"
						: window.dcCG == "main"
						? "Category page"
						: window.dcCG == "article"
						? "article"
						: "Subcategory page";
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: page_type,
						click_text: title_header,
						content_type: contentType,
						componenta_name: "header",
						position_in_componenta: i,
						click_destination: click_destination
					});
				}
			});
		}
	}
	function ynet_blogs_events() {
		if (document.querySelector(".blogs-item-wrapper")) {
			document
				.querySelectorAll(
					".blogs-item-wrapper .authorAndSocial-pf .mobileShareBtn, .blogs-item-wrapper .authorAndSocial-pf .mail, .blogs-item-wrapper .authorAndSocial-pf .tw, .blogs-item-wrapper .authorAndSocial-pf .wtap, .blogs-item-wrapper .authorAndSocial-pf .fb"
				)
				.forEach((el, index) => {
					el.addEventListener("click", function (event) {
						let fclosest = el.closest(".blogs-item-wrapper");
						let fdate =
							fclosest.querySelector(".date-section .date") &&
							fclosest.querySelector(".date-section .date").textContent != null
								? fclosest.querySelector(".date-section .date").textContent
								: "";
						if (fdate != "") {
							let new_date = fdate.replace(/[^0-9-.]/g, "");
							function isDateValid(dateStr) {
								return !isNaN(new Date(dateStr));
							}
							try {
								if (isDateValid(new_date) != true) {
									let dateArray = new_date.split(".");
									fdate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
								}
								let new_title_date = new Date(fdate);
								fdate = new_title_date.toISOString();
								let local_date = new Date(fdate);
								const toISOStringWithTimezone = (date) => {
									const pad = (n) =>
										`${Math.floor(Math.abs(n))}`.padStart(2, "0");
									return (
										date.getFullYear() +
										"-" +
										pad(date.getMonth() + 1) +
										"-" +
										pad(date.getDate()) +
										" " +
										pad(date.getHours()) +
										":" +
										pad(date.getMinutes()) +
										":" +
										pad(date.getSeconds())
									);
								};
								fdate = toISOStringWithTimezone(local_date);
							} catch (error) {
								console.error(error);
								fdate = "";
							}
						}
						let ftitle =
							fclosest.querySelector(".title-section h3").textContent;
						let social_network = "mailto";
						if (el.classList.contains("mobileShareBtn")) {
							social_network = "share";
						} else if (el.classList.contains("tw")) {
							social_network = "twitter";
						} else if (el.classList.contains("wtap")) {
							social_network = "whatsapp";
						} else if (el.classList.contains("fb")) {
							social_network = "facebook";
						}
						if (window.pushGa4DataLayer) {
							window.pushGa4DataLayer(event, {
								event: "content_share",
								page_type: "Blogs page",
								content_type_shared: "post update",
								social_network_name: social_network,
								date_modified: "",
								date_published: fdate,
								click_text: ftitle,
								content_type: "blogs",
								componenta_name: "blogs",
								position_in_componenta: 0,
							});
						}
					});
				});
		}
	}
	function ynet_blogs_more() {
		if (document.querySelector(".article-blog-componenta-wrapper")) {
			document.querySelectorAll(".article-blog-componenta-wrapper .continue-read-wrapper-pf").forEach((el, index) => {
					el.addEventListener("click", function (event) {
						let click_text = el.classList.contains("active") ?  "expand" :  "collapse";  
						let fclosest = el.closest(".blogs-auto-feed-item");				
						let ftitle =
							fclosest.querySelector(".title-section h3").textContent;					
						if (window.pushGa4DataLayer) {
							window.pushGa4DataLayer(event, {
								event: "content_click",
								page_type: "Blogs page",
								newsflash_title: ftitle,
								date_modified: window.dataLayer[0].dateModified,
								date_published: window.dataLayer[0].datePublished,
								click_text: click_text,
								content_type: "blogs",
								componenta_name: "blogs",
								position_in_componenta: index,
							});
						}
					});
				});
		}
	}
	function ynet_hyperlink_tag() {
		window
			.$(".ArticleBodyComponent a:not(.gelleryOpener)")
			.on("click", function () {
				var linkText = window.$(this).text();
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						click_text: linkText,
						content_type: "link",
						component_name: "Article Body",
						position_in_component: 0,
						click_destination: window.$(this).attr("href")
					});
				}
			});
		window.$(".ArticleTagsComponent a").on("click", function () {
			var linkText = window.$(this).text();
			let page_type =
				window.dcCG == "home"
					? "Home Page"
					: window.dcCG == "main"
					? "Category page"
					: window.dcCG == "article"
					? "article"
					: "Subcategory page";
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
					event: "content_click",
					page_type: page_type,
					click_text: linkText,
					content_type: "article_tags",
					component_name: "Article Tags",
					position_in_component: 0,
					click_destination: window.$(this).attr("href")
				});
			}
		});
		if (document.querySelector(".TopStory1280Componenta.Multi")) {
			document.querySelectorAll(".TopStory1280Componenta.Multi .BottomList .TopStoryBottomItem").forEach((item,index) => {
                item.addEventListener("click", () => {
                    const topStoryMulti = document.querySelector(".TopStory1280Componenta.Multi");
                    const isMagazine = topStoryMulti.classList.contains("magazine");
                    const isDark = topStoryMulti.classList.contains("dark") && !isMagazine;
                    const isSubstrip = topStoryMulti.classList.contains("moreArticle");
                    const topStoryBackground = isMagazine ? "wide_photo" : isDark ? "black" : "white";
                    const topStoryContent = topStoryMulti.classList.contains("blogItems") ? "blogs" : "article";
					let a_link = item.href ? item.href : item.closest("a").href;
					let split_link = a_link.split("/");
					let destination_article_id = a_link.includes("article") ? split_link[split_link.length - 1]: "";
					if  (destination_article_id != "" && destination_article_id.includes("autoplay")) {
						let splitted_a = destination_article_id.split("#");
						destination_article_id = splitted_a[0];
					}
            		if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							sub_strip: index,
							top_story_type: isSubstrip ? "sub_strips" : "regular",
							top_story_background: topStoryBackground,
							top_story_content: topStoryContent,
							click_destination: a_link,
							destination_article_id: destination_article_id
						});
                	}
                });
            });
		}
		if (document.querySelector(".videoGalleryVerticalDesktopWrapper")) {
			document.querySelectorAll(".videoGalleryVerticalDesktopWrapper .feedDisplay .slick-slide").forEach((slide, index) => {
					const articleLink = slide.querySelector(".contentDiv .videoLink");
					if (articleLink) {
						articleLink.addEventListener("click", () => {
							if (window.pushGa4DataLayer) {
								window.pushGa4DataLayer(event, {
									event: "content_click",
									component_name: "vertical_video",
									content_type: "componenta",
									position_in_component: index,
								});
							}
						});
					}
				});
		}
	}
	function hp_componentas_func() {
		let strip_components = document.querySelectorAll(
			".layoutItem.multi-strip-lines .slotView, .TopStory1280Componenta .slotView, .one-main .slotView"
		);
		let strip_ar = Array.from(strip_components);
		for (let i in strip_ar) {
			strip_ar[i].addEventListener("click", function (event) {
				let strip_topstory_link =
					strip_ar[i].querySelector(".textDiv a").href != null
						? strip_ar[i].querySelector(".textDiv a").pathname.substring(1)
						: "";
				let new_link = strip_topstory_link.includes("co.il")
					? strip_topstory_link.slice(strip_topstory_link.indexOf("il/") + 3)
					: "";
				let title_editor =
					strip_ar[i].querySelector(".author") &&
					strip_ar[i].querySelector(".author").textContent != null
						? strip_ar[i].querySelector(".author").textContent
						: "";
				let title_date = "";
				if (
					strip_ar[i].querySelector(".topStoryDate") !== null &&
					strip_ar[i].querySelector(".topStoryDate").attributes.title &&
					strip_ar[i].querySelector(".topStoryDate").attributes.title
						.textContent != null
				) {
					let dateInput =
						strip_ar[i].querySelector(".topStoryDate").attributes.title
							.textContent;
					let dateArray = dateInput.split(".");
					let newDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
					let new_title_date = new Date(newDate);
					title_date = new_title_date.toISOString();
					let local_date = new Date(title_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_date = toISOStringWithTimezone(local_date);
				}
				let comp_name = strip_ar[i].closest(".TopStory1280Componenta")
					? "top_story"
					: "strip";
				let photo_title =
					strip_ar[i].querySelector("img") &&
					strip_ar[i].querySelector("img").attributes.title
						? strip_ar[i].querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					strip_ar[i].querySelector("img") &&
					strip_ar[i].querySelector("img").attributes.src
						? strip_ar[i].querySelector("img").attributes.src.textContent
						: "there is no photo";


				let strip_title_article =
					strip_ar[i].querySelector(".textDiv h2 span") != null
						? strip_ar[i].querySelector(".textDiv h2 span").textContent
						: "";
				if (strip_ar[i].querySelector(".textDiv h1 span") != null) {
					strip_title_article =
						strip_ar[i].querySelector(".textDiv h1 span").textContent;
				}
				if (strip_ar[i].querySelector(".textDiv h2") != null) {
					strip_title_article =
						strip_ar[i].querySelector(".textDiv h2").textContent;
				}
				let compo_type = window.dcCG == "home" ? "componenta" : "strip";
				let a_link = strip_ar[i].querySelector("a").href;
				let destination_article_id = get_article_id(strip_ar[i]);

				const topStoryMulti = document.querySelector(".TopStory1280Componenta.Multi");
				const isMagazine = topStoryMulti && topStoryMulti.classList.contains("magazine");
				const isDark = topStoryMulti && topStoryMulti.classList.contains("dark") && !isMagazine;
				const isSubstrip = topStoryMulti && topStoryMulti.classList.contains("moreArticle");
				const topStoryBackground = isMagazine ? "wide_photo" : isDark ? "black" : "white";
				const topStoryContent = topStoryMulti && topStoryMulti.classList.contains("blogItems") ? "blogs" : "article";
				
				
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: "article",
						author_name: title_editor,
						date_published: title_date,
						click_text: strip_title_article,
						content_type: compo_type,
						componenta_name: comp_name,
						photo_url: photo_url,
						photo_title: photo_title,
						position_in_componenta: i,
						click_destination: a_link,
						destination_article_id: destination_article_id,
						top_story_type: isSubstrip ? "sub_strips" : "regular",
						top_story_background: topStoryBackground,
						top_story_content: topStoryContent
					});
				}
			});
		}

		// yplus comp - old
		let yplus_components = document.querySelectorAll(
			".layoutItem.yplus-promo-gallery .slotView"
		);
		let yplus_ar = Array.from(yplus_components);
		for (let y in yplus_ar) {
			yplus_ar[y].addEventListener("click", function (event) {
				let title_yplus_article =
					yplus_ar[y].querySelector(".slotTitle span") != null
						? yplus_ar[y].querySelector(".slotTitle span").textContent
						: "";
				let url_yplus_article =
					yplus_ar[y].querySelector("a") != null
						? yplus_ar[y].querySelector("a").pathname.substring(1)
						: "";
				let title_editor =
					yplus_ar[y].querySelector(".details .author") &&
					yplus_ar[y].querySelector(".details .author").textContent != null
						? yplus_ar[y].querySelector(".details .author").textContent
						: "";
				let title_date =
					yplus_ar[y].querySelector(".details .DateDisplay") &&
					yplus_ar[y].querySelector(".details .DateDisplay").attributes.datetime
						? MultiImagesArr.querySelector(".details .DateDisplay").attributes
								.datetime.textContent
						: "";
				let photo_title =
					yplus_ar[y].querySelector("img") &&
					yplus_ar[y].querySelector("img").attributes.title
						? yplus_ar[y].querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					yplus_ar[y].querySelector("img") &&
					yplus_ar[y].querySelector("img").attributes.src
						? yplus_ar[y].querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (title_date != "") {
					let local_date = new Date(title_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_date = toISOStringWithTimezone(local_date);
				}
				let a_link = yplus_ar[y].querySelector("a").href;
				let destination_article_id = get_article_id(yplus_ar[y]);

				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: "ynet+ article",
						page_type: "article",
						author_name: title_editor,
						date_published: title_date,
						click_text: title_yplus_article,
						content_type: "ynet+",
						componenta_name: "ynet+",
						photo_url: photo_url,
						photo_title: photo_title,
						position_in_componenta: y,
						click_destination: a_link,
						destination_article_id: destination_article_id
					});
				}
			});
		}

		// YPLUS
		// yplus NEW comp items
		let yplus_new_components = document.querySelectorAll(
			".multi-images-magazine-yplus .slotView"
		);
		let yplus_new_ar = Array.from(yplus_new_components);
		for (let y in yplus_new_ar) {
			let item_yplus = yplus_new_ar[y];
			item_yplus.addEventListener("click", function (event) {
				let title_yplus_new_article =
				item_yplus.querySelector(".slotTitle a div") != null
						? item_yplus.querySelector(".slotTitle a div").textContent
						: "";
				let url_yplus_new_article =
				item_yplus.querySelector(".slotTitle a") != null
						? item_yplus.querySelector(".slotTitle a").pathname.substring(1)
						: "";
				let title_yplus_editor =
				item_yplus.querySelector(".authorField") &&
				item_yplus.querySelector(".authorField").textContent != null
						? item_yplus.querySelector(".authorField").textContent
						: "";
				let title_yplus_date =
				item_yplus.querySelector(".DateDisplay") &&
				item_yplus.querySelector(".DateDisplay").attributes.datetime
						? item_yplus.querySelector(".DateDisplay").attributes
								.datetime.textContent
						: "";
				let photo_yplus_title =
				item_yplus.querySelector("img") &&
				item_yplus.querySelector("img").attributes.title
						? item_yplus.querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_yplus_url =
				item_yplus.querySelector("img") &&
				item_yplus.querySelector("img").attributes.src
						? item_yplus.querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (title_yplus_date != "") {
					let local_date = new Date(title_yplus_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_yplus_date = toISOStringWithTimezone(local_date);
				}
				let a_link = item_yplus.querySelector(".slotTitle a").href;
				let destination_article_id = get_article_id(item_yplus);

				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: "article",
						author_name: title_yplus_editor,
						date_published: title_yplus_date,
						click_text: title_yplus_new_article,
						content_type: "strip",
						componenta_name: "Ynet+ HP Componenta",
						photo_url: photo_yplus_url,
						photo_title: photo_yplus_title,
						position_in_componenta: y,
						click_destination: a_link,
						destination_article_id: destination_article_id
					});
				}
			});
		}

		// yplus NEW comp buttons and icons
		document.querySelectorAll('.multi-images-magazine-yplus .tabLogo, .multi-images-magazine-yplus .tabLeftSide .titleLink, .multi-images-magazine-yplus .scrollLeft, .multi-images-magazine-yplus .scrollRight').forEach((btn, index) => {
			btn.addEventListener('click', function (event) {
			let click_text = "Ynet+";
			let click_destination = document.querySelector('.multi-images-magazine-yplus .tabLeftSide a.titleLink').href;
			if (btn.classList.contains("titleLink")) {
				click_text = btn.querySelector("div").textContent;
			} else if (btn.classList.contains("scrollLeft")) {
				click_destination = click_text = "swipe_left";
			} else if (btn.classList.contains("scrollRight")) {
				click_destination = click_text = "swipe_right";
			}
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
				event: "content_click",
				click_text: click_text,
				content_type: "componenta",
				componenta_name: "Ynet+ HP Componenta",
				content_sub_type: "logo",
				click_destination: click_destination,
				});
			 }
			});
		});

		// END OF YPLUS


        
		setTimeout(function () {
			let page_type =
						window.dcCG == "home"
							? "homepage"
							: window.dcCG == "main"
							? "category page"
							: window.dcCG == "article"
							? "article"
							: "subcategory page";
			let MultiImages = document.querySelectorAll(
				".layoutItem.multi-articles-weekend .slotView, .layoutItem.multi-articles-section .slotView, .layoutItem.multi-images-1280 .slotView, .layoutItem.multi-images-gallery-homepage .slotView, .multi-images-magazine .slotView, .multi-images-magazine-square .slotView"
			);
			let MultiImages_ar = Array.from(MultiImages);
			for (let k in MultiImages_ar) {
				const MultiImagesArr = MultiImages_ar[k];
				let closest_comp = MultiImagesArr.closest(".layoutItem");
				if (MultiImagesArr.closest(".MultiImagesSpecial1280Componenta")) {
					closest_comp = MultiImagesArr.closest(".MultiImagesSpecial1280Componenta");
				} else if (MultiImagesArr.closest(".MultiArticlesSectionComponenta")) {
					closest_comp = MultiImagesArr.closest(".MultiArticlesSectionComponenta");
				} else if (MultiImagesArr.closest(".MultiImages1280Componenta")) {
					closest_comp = MultiImagesArr.closest(".MultiImages1280Componenta")
				}
				let title_editor =
					MultiImagesArr.querySelector(".moreDetails .authorField") &&
					MultiImagesArr.querySelector(".moreDetails .authorField")
						.textContent != null
						? MultiImagesArr.querySelector(".moreDetails .authorField")
								.textContent
						: "";
				let title_date =
					MultiImagesArr.querySelector(".moreDetails .DateDisplay") &&
					MultiImagesArr.querySelector(".moreDetails .DateDisplay").attributes
						.datetime
						? MultiImagesArr.querySelector(".moreDetails .DateDisplay")
								.attributes.datetime.textContent
						: "";
				let photo_title =
					MultiImagesArr.querySelector("img") &&
					MultiImagesArr.querySelector("img").attributes.title
						? MultiImagesArr.querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					MultiImagesArr.querySelector("img") &&
					MultiImagesArr.querySelector("img").attributes.src
						? MultiImagesArr.querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (title_date != "") {
					let local_date = new Date(title_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_date = toISOStringWithTimezone(local_date);
				}
				let multiimages_title = "";
				if (MultiImagesArr.closest(".MultiImagesMagazine")) {
					let closest_multiimages = MultiImagesArr.closest(
						".MultiImagesMagazine"
					);
					if (
						closest_multiimages.querySelector(".rightTitleText img") != null
					) {
						if (
							closest_multiimages.querySelector("a.rightTitleLink img") != null
						) {
							if (
								closest_multiimages
									.querySelector(".rightTitleLink")
									.href.includes("laisha")
							) {
								multiimages_title = "לאישה";
							}
						}
					} else {
						multiimages_title =
							closest_multiimages.querySelector(".rightTitleText") != null
								? closest_multiimages.querySelector(".rightTitleText")
										.textContent
								: "";
					}
				} else {
					multiimages_title =
						closest_comp.querySelector(".rightTitleText") != null
							? closest_comp.querySelector(".rightTitleText").textContent
							: "";
				}
				MultiImagesArr.addEventListener("click", function (event) {
					let slotviews_multi_sum = MultiImagesArr.closest(
						".MultiImagesMagazine"
					)
						? Array.from(
								MultiImagesArr.closest(".MultiImagesMagazine").querySelectorAll(
									".slotView"
								)
						  )
						: Array.from(closest_comp.querySelectorAll(".slotView"));
					let multi_strip_index = slotviews_multi_sum.indexOf(MultiImagesArr);
					let multi_title_article = MultiImagesArr.querySelector(".slotTitle a div") != null
					 ? MultiImagesArr.querySelector(".slotTitle a div").textContent : 
					 (MultiImagesArr.querySelector(".slotTitle a span") != null 
					 ? MultiImagesArr.querySelector(".slotTitle a span").textContent : "");

					let a_link = MultiImagesArr.querySelector("a").href;
					let destination_article_id = get_article_id(MultiImagesArr);
			
					if (window.pushGa4DataLayer) {
						if (MultiImagesArr.closest(".layoutItem").classList.contains("multi-articles-weekend")) {
							window.pushGa4DataLayer(event, {
								event: "content_click",
								page_type: page_type,
								click_text: multi_title_article,
								content_type: "componenta",
								componenta_name: "multi-articles-weekend",
								photo_url: photo_url,
								photo_title: photo_title,
								position_in_componenta: multi_strip_index,
								click_destination: a_link,
								destination_article_id: destination_article_id
							});
						} else {
							window.pushGa4DataLayer(event, {
								event: "content_click",
								page_type: page_type,
								author_name: title_editor,
								date_published: title_date,
								click_text: multi_title_article,
								content_type: "componenta",
								componenta_name: multiimages_title,
								photo_url: photo_url,
								photo_title: photo_title,
								position_in_componenta: multi_strip_index,
								click_destination: a_link,
								destination_article_id: destination_article_id
							});
						}						
					}
				});
			}
		}, 3000);

		let hp_components = document.querySelectorAll(
			".layoutItem.multi-article-1280-2 .slotView, .layoutItem.multi-images-election .slotView, .layoutItem.multi-article-images-1280-2 .slotView," +
				".layoutItem.multi-article-top-1280 .slotView,.layoutItem.opinions .opinionsSlotItem"
		);
		let articles_ar = Array.from(hp_components);
		for (let k in articles_ar) {
			const comp_article = articles_ar[k];
			let comp_name =
				comp_article.closest(".layoutItem").querySelector(".rightTitleText") !=
				null
					? comp_article.closest(".layoutItem").querySelector(".rightTitleText")
							.textContent
					: "";
			comp_article.addEventListener("click", function (event) {
				let slotviews_sum = comp_article.classList.contains("opinionsSlotItem")
					? Array.from(
							comp_article
								.closest(".layoutItem")
								.querySelectorAll(".opinionsSlotItem")
					  )
					: Array.from(
							comp_article.closest(".layoutItem").querySelectorAll(".slotView")
					  );
				let strip_index = slotviews_sum.indexOf(comp_article);
				let slot_title =
					comp_article.querySelector(".slotTitle span") != null
						? comp_article.querySelector(".slotTitle span")
						: false;
				let title_article = slot_title != false ? slot_title.textContent : "";
				let title_editor =
					comp_article.querySelector(".moreDetails .authorInfo") &&
					comp_article.querySelector(".moreDetails .authorInfo").textContent !=
						null
						? comp_article.querySelector(".moreDetails .authorInfo").textContent
						: "";
				let title_date =
					comp_article.querySelector(".moreDetails .DateDisplay") &&
					comp_article.querySelector(".moreDetails .DateDisplay").attributes
						.datetime
						? comp_article.querySelector(".moreDetails .DateDisplay").attributes
								.datetime.textContent
						: "";
				let photo_title =
					comp_article.querySelector("img") &&
					comp_article.querySelector("img").attributes.title
						? comp_article.querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					comp_article.querySelector("img") &&
					comp_article.querySelector("img").attributes.src
						? comp_article.querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (title_date != "") {
					let local_date = new Date(title_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_date = toISOStringWithTimezone(local_date);
				}
				let title_url = "";
				if (comp_article.classList.contains("opinionsSlotItem")) {
					title_url = comp_article.querySelector(".slotText").href
						? comp_article.querySelector(".slotText").pathname.substring(1)
						: "";
					title_editor =
						comp_article.querySelector(".slotText .author") &&
						comp_article.querySelector(".slotText .author").textContent != null
							? comp_article.querySelector(".slotText .author").textContent
							: "";
				} else {
					title_url = comp_article.querySelector(".slotTitle a").href
						? comp_article.querySelector(".slotTitle a").pathname.substring(1)
						: "";
				}
				if (slot_title == false) {
					if (comp_article.querySelector(".slotTitle div") != null) {
						title_article =
							comp_article.querySelector(".slotTitle div").textContent;
					} else if (comp_article.querySelector(".title span") != null) {
						title_article =
							comp_article.querySelector(".title span").textContent;
					} else {
						title_article =
							comp_article.querySelector(".slotTitle a").textContent;
					}
				}
				let comp_type = window.dcCG == "home" ? "componenta" : "strip";
				let page_type =
					window.dcCG == "home"
						? "homepage"
						: window.dcCG == "main"
						? "category page"
						: window.dcCG == "article"
						? "article"
						: "subcategory page";

				let a_link = comp_article.querySelector("a").href;
				let destination_article_id = get_article_id(comp_article);

				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: page_type,
						author_name: title_editor,
						date_published: title_date,
						click_text: title_article,
						content_type: comp_type,
						componenta_name: comp_name,
						photo_url: photo_url,
						photo_title: photo_title,
						position_in_componenta: strip_index,
						click_destination: a_link,
						destination_article_id: destination_article_id
					});
				}
			});
		}
	}
	
	function category_componentas_func() {
		let page_type =
			window.dcCG == "home"
				? "Home Page"
				: window.dcCG == "main"
				? "Category page"
				: window.dcCG == "article"
				? "article"
				: "Subcategory page";
		if (window.dcCG != "home") {
			let strip_components = document.querySelectorAll(
				".TopStory1280Componenta .slotView, .layoutItem.multi-strip-channels .slotView"
			);
			let strip_ar = Array.from(strip_components);
			for (let i in strip_ar) {
				strip_ar[i].addEventListener("click", function (event) {
					let strip_title_article =
						strip_ar[i].querySelector(".slotTitle span") != null
							? strip_ar[i].querySelector(".slotTitle span").textContent
							: "";
					let title_editor =
						strip_ar[i].querySelector(".author") &&
						strip_ar[i].querySelector(".author").textContent != null
							? strip_ar[i].querySelector(".author").textContent
							: "";
					let title_Date =
						strip_ar[i].querySelector(".DateDisplay") != null &&
						strip_ar[i].querySelector(".DateDisplay").attributes.datetime
							? strip_ar[i].querySelector(".DateDisplay").attributes.datetime
									.textContent
							: "";
					let photo_title =
						strip_ar[i].querySelector("img") &&
						strip_ar[i].querySelector("img").attributes.title
							? strip_ar[i].querySelector("img").attributes.title.textContent
							: "there is no photo";
					let photo_url =
						strip_ar[i].querySelector("img") &&
						strip_ar[i].querySelector("img").attributes.src
							? strip_ar[i].querySelector("img").attributes.src.textContent
							: "there is no photo";
					if (
						strip_ar[i].querySelector(".topStoryDate") !== null &&
						strip_ar[i].querySelector(".topStoryDate").attributes.title &&
						strip_ar[i].querySelector(".topStoryDate").attributes.title
							.textContent != null
					) {
						let dateInput =
							strip_ar[i].querySelector(".topStoryDate").attributes.title
								.textContent;
						let dateArray = dateInput.split(".");
						let newDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
						let new_title_date = new Date(newDate);
						title_Date = new_title_date.toISOString();
					}
					if (title_Date != "") {
						let local_date = new Date(title_Date);
						const toISOStringWithTimezone = (date) => {
							const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
							return (
								date.getFullYear() +
								"-" +
								pad(date.getMonth() + 1) +
								"-" +
								pad(date.getDate()) +
								" " +
								pad(date.getHours()) +
								":" +
								pad(date.getMinutes()) +
								":" +
								pad(date.getSeconds())
							);
						};
						title_Date = toISOStringWithTimezone(local_date);
					}
					let comp_name = strip_ar[i].closest(".TopStory1280Componenta")
						? "top_story"
						: "multi-strip-channels";
					let comp_type = strip_ar[i].closest(".TopStory1280Componenta")
						? "top_story"
						: "strip";
		
					let a_link = strip_ar[i].querySelector("a").href;
					let destination_article_id = get_article_id(strip_ar[i]);
					
					const topStoryMulti = document.querySelector(".TopStory1280Componenta.Multi");
					const isMagazine = topStoryMulti && topStoryMulti.classList.contains("magazine");
					const isDark = topStoryMulti && topStoryMulti.classList.contains("dark") && !isMagazine;
					const isSubstrip = topStoryMulti && topStoryMulti.classList.contains("moreArticle");
					const topStoryBackground = isMagazine ? "wide_photo" : isDark ? "black" : "white";
					const topStoryContent = topStoryMulti && topStoryMulti.classList.contains("blogItems") ? "blogs" : "article";
					

					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							page_type: page_type,
							author_name: title_editor,
							date_published: title_Date,
							photo_url: photo_url,
							photo_title: photo_title,
							click_text: strip_title_article,
							content_type: comp_type,
							componenta_name: comp_name,
							position_in_componenta: i,
                            top_story_type: isSubstrip ? "sub_strips" : "regular",
						    top_story_background: topStoryBackground,
						    top_story_content: topStoryContent,
							click_destination: a_link,
							destination_article_id: destination_article_id
						});
					}
				});
			}
		}
		let multi_components = document.querySelectorAll(
			".layoutItem.multi-article-auto-1280 .slotView, .layoutItem.multi-article-manual-channels .slotView, .layoutItem.multi-images-auto-1280 .slotView, .layoutItem.article-headlines-auto-1280-2 .slotView"
		);
		let multi_ar = Array.from(multi_components);
		for (let k in multi_ar) {
			multi_ar[k].addEventListener("click", function (event) {
				let closest_componenta = multi_ar[k].closest(".layoutItem");
				let multi_title =
					closest_componenta &&
					closest_componenta.querySelector(".titleLink div") != null
						? closest_componenta.querySelector(".titleLink div").textContent
						: "";
				let comp_type = multi_ar[k].closest(".ArticleHeadlinesAuto")
					? "article_headlines_auto"
					: multi_ar[k].closest(".MultiImages1280Componenta")
					? "multi_images_auto"
					: "multi_article";
				let slotviews_multi_sum = Array.from(
					closest_componenta.querySelectorAll(".slotView")
				);
				let multi_strip_index = slotviews_multi_sum.indexOf(multi_ar[k]);
				let multi_title_article =
					multi_ar[k].querySelector(".slotTitle a") != null &&
					multi_ar[k].querySelector(".slotTitle a").textContent != null
						? multi_ar[k].querySelector(".slotTitle a").textContent
						: "";
				if (multi_ar[k].querySelector(".slotTitle a span") != null) {
					multi_title_article =
						multi_ar[k].querySelector(".slotTitle a span").textContent;
				}
				if (multi_ar[k].querySelector(".slotTitle a div") != null) {
					multi_title_article =
						multi_ar[k].querySelector(".slotTitle a div").textContent;
				}
				let title_editor =
					multi_ar[k].querySelector(".authorInfo") &&
					multi_ar[k].querySelector(".authorInfo").textContent != null
						? multi_ar[k].querySelector(".authorInfo").textContent
						: "";
				let title_date =
					multi_ar[k].querySelector(".DateDisplay") &&
					multi_ar[k].querySelector(".DateDisplay").attributes.datetime
						? multi_ar[k].querySelector(".DateDisplay").attributes.datetime
								.textContent
						: "";
				let photo_title =
					multi_ar[k].querySelector("img") &&
					multi_ar[k].querySelector("img").attributes.title
						? multi_ar[k].querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					multi_ar[k].querySelector("img") &&
					multi_ar[k].querySelector("img").attributes.src
						? multi_ar[k].querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (multi_ar[k].closest(".multi-images-auto-1280")) {
					title_editor =
						multi_ar[k].querySelector(".authorField") &&
						multi_ar[k].querySelector(".authorField").textContent != null
							? multi_ar[k].querySelector(".authorField").textContent
							: "";
				}
				let local_date = new Date(title_date);
				const toISOStringWithTimezone = (date) => {
					const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
					return (
						date.getFullYear() +
						"-" +
						pad(date.getMonth() + 1) +
						"-" +
						pad(date.getDate()) +
						" " +
						pad(date.getHours()) +
						":" +
						pad(date.getMinutes()) +
						":" +
						pad(date.getSeconds())
					);
				};
				title_date = toISOStringWithTimezone(local_date);

				let a_link = multi_ar[k].querySelector("a").href;
				let destination_article_id = get_article_id(multi_ar[k]);

				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: page_type,
						author_name: title_editor,
						date_published: title_date,
						photo_url: photo_url,
						photo_title: photo_title,
						click_text: multi_title_article,
						content_type: comp_type,
						componenta_name: multi_title,
						position_in_componenta: multi_strip_index,
						click_destination: a_link,
						destination_article_id: destination_article_id
					});
				}
			});
		}
		let promo_components = document.querySelectorAll(
			".layoutItem.article-promo"
		);
		let promo_ar = Array.from(promo_components);
		for (let i in promo_ar) {
			promo_ar[i].addEventListener("click", function (event) {
				let promo_title_article =
					promo_ar[i].querySelector(".slotTitle span") != null
						? promo_ar[i].querySelector(".slotTitle span").textContent
						: "";
				let title_editor =
					promo_ar[i].querySelector(".articleAuthor span") &&
					promo_ar[i].querySelector(".articleAuthor span").textContent != null
						? promo_ar[i].querySelector(".articleAuthor span").textContent
						: "";
				let title_date =
					promo_ar[i].querySelector(".DateDisplay") &&
					promo_ar[i].querySelector(".DateDisplay").attributes.datetime
						? promo_ar[i].querySelector(".DateDisplay").attributes.datetime
								.textContent
						: "";
				let photo_title =
					promo_ar[i].querySelector("img") &&
					promo_ar[i].querySelector("img").attributes.title
						? promo_ar[i].querySelector("img").attributes.title.textContent
						: "there is no photo";
				let photo_url =
					promo_ar[i].querySelector("img") &&
					promo_ar[i].querySelector("img").attributes.src
						? promo_ar[i].querySelector("img").attributes.src.textContent
						: "there is no photo";
				if (title_date != "") {
					let local_date = new Date(title_date);
					const toISOStringWithTimezone = (date) => {
						const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
						return (
							date.getFullYear() +
							"-" +
							pad(date.getMonth() + 1) +
							"-" +
							pad(date.getDate()) +
							" " +
							pad(date.getHours()) +
							":" +
							pad(date.getMinutes()) +
							":" +
							pad(date.getSeconds())
						);
					};
					title_date = toISOStringWithTimezone(local_date);
				}
				let a_link = promo_ar[i].querySelector("a").href;
				let destination_article_id = get_article_id(promo_ar[i]);
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: page_type,
						author_name: title_editor,
						date_published: title_date,
						photo_url: photo_url,
						photo_title: photo_title,
						click_text: promo_title_article,
						content_type: "promo",
						componenta_name: "article_promo",
						position_in_componenta: i,
						click_destination: a_link,
						destination_article_id: destination_article_id
					});
				}
			});
		}
	}
	function photo_gallery_func() {
		window
			.$(".ArticleBodyComponent .ArticleImageComponenta .gelleryOpener > img")
			.on("click", function () {
				var link = window.$(this).attr("src");
				var linkText = window.$(this).attr("title");
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						photo_url: link,
						photo_title: linkText,
						content_type: "photo (article gallery)",
						component_name: "Article Body",
						date_modified: window.dataLayer[0].dateModified,
						date_published: window.dataLayer[0].datePublished,
						position_in_component: 0,
					});
				}
			});
	}
	function content_share_func() {
		if (document.querySelector(".blogs-item-wrapper")) {
			document
				.querySelectorAll(
					".blogs-item-wrapper .authorAndSocial .mobileShareBtn, .blogs-item-wrapper .authorAndSocial .mail, .blogs-item-wrapper .authorAndSocial .tw, .blogs-item-wrapper .authorAndSocial .wtap, .blogs-item-wrapper .authorAndSocial .fb"
				)
				.forEach((el, index) => {
					el.addEventListener("click", function (event) {
						let fclosest = el.closest(".blogs-item-wrapper");
						let fdate =
							fclosest.querySelector(".date-section .date") &&
							fclosest.querySelector(".date-section .date").textContent != null
								? fclosest.querySelector(".date-section .date").textContent
								: "";
						if (fdate != "") {
							let new_date = fdate.replace(/[^0-9-.]/g, "");
							function isDateValid(dateStr) {
								return !isNaN(new Date(dateStr));
							}
							try {
								if (isDateValid(new_date) != true) {
									let dateArray = new_date.split(".");
									fdate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
								}
								let new_title_date = new Date(fdate);
								fdate = new_title_date.toISOString();
								let local_date = new Date(fdate);
								const toISOStringWithTimezone = (date) => {
									const pad = (n) =>
										`${Math.floor(Math.abs(n))}`.padStart(2, "0");
									return (
										date.getFullYear() +
										"-" +
										pad(date.getMonth() + 1) +
										"-" +
										pad(date.getDate()) +
										" " +
										pad(date.getHours()) +
										":" +
										pad(date.getMinutes()) +
										":" +
										pad(date.getSeconds())
									);
								};
								fdate = toISOStringWithTimezone(local_date);
							} catch (error) {
								console.error(error);
								fdate = "";
							}
						}
						let ftitle =
							fclosest.querySelector(".title-section h3").textContent;
						let social_network = "mailto";
						if (el.classList.contains("mobileShareBtn")) {
							social_network = "share";
						} else if (el.classList.contains("tw")) {
							social_network = "twitter";
						} else if (el.classList.contains("wtap")) {
							social_network = "whatsapp";
						} else if (el.classList.contains("fb")) {
							social_network = "facebook";
						}
						if (window.pushGa4DataLayer) {
							window.pushGa4DataLayer(event, {
								event: "content_share",
								page_type: "Blogs page",
								content_type_shared: "post update",
								social_network_name: social_network,
								date_modified: "",
								date_published: fdate,
								click_text: ftitle,
								content_type: "blogs",
								componenta_name: "blogs",
								position_in_componenta: 0,
							});
						}
					});
				});
		} else {
			document.addEventListener("click", function (event) {
				let default_list = ["wa", "fb", "tw", "mailto", "frontCopyButton"];
				let object_list = {
					wa: "whatsapp",
					fb: "facebook",
					tw: "twitter",
					mailto: "email",
					frontCopyButton: "copy_url",
				};
				if (
					(document.querySelector("meta[property='og:IsPay']") &&
						document
							.querySelector("meta[property='og:IsPay']")
							.getAttribute("content") == 1) ||
					(window.__SERVER_APP_STATE__ &&
						window.__SERVER_APP_STATE__.initialData.article_data.IsPay == 1)
				) {
					default_list = ["whatsapp", "facebook", "twitter", "mail"];
					object_list = {
						whatsapp: "whatsapp",
						facebook: "facebook",
						twitter: "twitter",
						mail: "email",
					};
				}
				const sharingClassList = default_list;
				const sharingClassToDataLayerName = object_list;
				const className = [...event.target.classList].find((className) =>
					sharingClassList.includes(className)
				);
				if (!className || !window.collectGa4DataFromDomElements) {
					return;
				}
				let content_sub_type = event.target.closest(".SiteVerticalArticleSocialShare_Wrapper") ? "body" : "header";
				const data = window.collectGa4DataFromDomElements(event);
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "content_share",
					content_type_shared: "article",
					content_sub_type: content_sub_type,
					social_network_name: sharingClassToDataLayerName[className],
					...data,
				});
			});
			window.collectGa4DataFromDomElements = (e) => {
				let dataToCollect = {};
				let el = e.target;
				while (el) {
					const data = Object.keys(el.dataset)
						.filter((key) => key.startsWith("yitan"))
						.reduce((obj, key) => {
							if (!obj[key]) {
								obj[key] = el.dataset[key];
							}
							return obj;
						}, {});
					if (Object.keys(data).length) {
						Object.keys(data).forEach((key) => {
							const newKey = key
								.replace(/([A-Z])/g, "_$1")
								.toLowerCase()
								.replace("yitan_", "");
							data[newKey] = data[key];
							delete data[key];
						});
						dataToCollect = { ...dataToCollect, ...data };
					}
					const nextEl = el.closest("[data-yitan-dc_path]");
					if (nextEl === el) {
						break;
					}
					el = nextEl;
				}
				dataToCollect["event_timestamp"] = new Date()
					.toISOString()
					.replace("T", " ")
					.replace("Z", " UTC");
				dataToCollect["date_modified"] = window.dataLayer[0].dateModified;
				dataToCollect["date_published"] = window.dataLayer[0].datePublished;
				return dataToCollect;
			};
		}
	}
	function comments_event_func() {
		document
			.querySelectorAll(
				".authorAndDateContainer .addNewComment, .SiteVerticalArticleSocialShare_Wrapper .addNewComment, .commentInfoBox .addNewComment, .sendBtn, .ArticleComment1280 .topView .topLeftView .details .commentToComent, .showMoreCommentsButton"
			)
			.forEach((btn, index) => {
				let comments_numer =
					document.querySelector(".verticalSidebarCommentNumber") &&
					document.querySelector(".verticalSidebarCommentNumber").textContent !=
						null &&
					document.querySelector(".verticalSidebarCommentNumber").textContent !=
						""
						? parseInt(
								document.querySelector(".verticalSidebarCommentNumber")
									.textContent
						  )
						: 0;
				btn.addEventListener("click", function (event) {
					let innerText = "";
					let action = "";
					if (btn.classList.contains("addNewComment")) {
						innerText = "הוספת תגובה";
						action = "add_comment";
					} else if (btn.classList.contains("sendBtn")) {
						innerText = "שלח תגובה";
						action = "send_comment";
					} else if (btn.classList.contains("commentToComent")) {
						innerText = "הגיבו לתגובה";
						action = "comment_to_comment";
					} else if (btn.classList.contains("showMoreCommentsButton")) {
						innerText = "טען תגובות נוספות";
						action = "load_more_comments";
					} else if (btn.querySelector(".addNewComment #spotimCmtCounter")) {
						innerText = "הוספת תגובה";
						action = "go_to_commments";
					}
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "comments",
							click_text: innerText,
							content_type: "article",
							componenta_name: "comments",
							comments_action: action,
							comments: comments_numer,
							date_modified: window.dataLayer[0].dateModified,
							date_published: window.dataLayer[0].datePublished,
						});
					}
				});
			});
	}
	function piano_articlestatus_func() {
		window.addEventListener("load", () => {
			const yplusArticle = document.querySelector(".articleContainer.yplus");
			if (!yplusArticle) return;
			const dataLayerToGaDict = {
				contentPageType: "page_type",
				dcPath: "dc_path",
				userId: "yid",
			};
			const getYitanDataset = (ds) => {
				let articleYitanAttributes = {};
				for (att in ds) {
					if (att.indexOf("yitan") != -1) {
						const fixedAtt = att.slice(5).toLowerCase();
						gaAttr = dataLayerToGaDict[fixedAtt] || fixedAtt;
						articleYitanAttributes = {
							...articleYitanAttributes,
							[gaAttr]: ds[att],
						};
					}
				}
				return articleYitanAttributes;
			};
			const bodyDataset = document.body.dataset;
			const hContainer = document.getElementsByClassName("hContainer");
			const mContainer = document.getElementsByClassName("mContainer");
			const container = hContainer ? hContainer[0] : mContainer[0];
			window.dataLayer.push({
				...getYitanDataset(bodyDataset),
				...getYitanDataset(container.dataset),
				articleStatus: document.getElementById("piano-container-article")
					? "Close"
					: "Open",
				event: "articleStatus",
				date_modified: window.dataLayer[0].dateModified,
				date_published: window.dataLayer[0].datePublished,
			});
		});
	}
	function ynet_premium_login() {
		document.querySelectorAll(".YnetPremiumHeaderLogin .login_premium, .YnetPianoLogin").forEach((el, index) => {
				el.addEventListener("click", function (event) {
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							click_text: "Ynet HP - Header",
							content_type: "menu",
							componenta_name: "Ynet+ -Login",
							position_in_componenta: 0,
						});
					}
				});
		});
		document.querySelectorAll('.PremiumHeader .midLogo,.YplusWithPaperComponenta .logoLink,.YplusMobileHeader .midLogo, .PremiumMutamHeader .yplusLogo').forEach((el,index)=>{
			el.addEventListener('click', function(event) {
				if (window.pushGa4DataLayer) {
					const { contentPageType, piano_id, user_type} = dataLayer[0];
					window.pushGa4DataLayer(event, {
						event: "plus_funnel",
						piano_funnel_step:"ynet+ logo click",
						page_location:location.href,
						user_type: user_type ? user_type : '',
						piano_id:piano_id ? piano_id :'',
						article_id: window.articleId ? window.articleId :'homepage',
						page_type: contentPageType ? contentPageType : '',
					});
				}
			});
		});
	}
	function ynet_flashes_hp_func() {
		document.querySelectorAll('.TickerSliderComponenta .slick-prev, .TickerSliderComponenta .slick-next').forEach((el, index) => {
			el.addEventListener('click', function (event) {
			let action_flash = "";
			if (el.classList.contains("slick-prev")) {
				action_flash = "left";
			} else if (el.classList.contains("slick-next")) {
				action_flash = "right";
			} else if (el.textContent == "מבזקים") {
				action_flash = "מבזקים";
			} else if (el.classList.contains("gotoButton")) {
				action_flash = "לכל העדכונים";
			}
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
				event: "content_click",
				click_text: action_flash,
				content_type: "componenta",
				componenta_name: "newsflash",
				position_in_componenta: index,
				});
			 }
			});
		});

		document.querySelectorAll('.TickerSliderComponenta .toggleElm').forEach((elem, index) => {
			elem.addEventListener('click', function (event) {
				let f_closest = elem.closest(".slotView");
				let flash_date = f_closest.querySelector(".DateDisplay") && f_closest.querySelector(".DateDisplay").attributes.datetime ? f_closest.querySelector(".DateDisplay").attributes.datetime.textContent : "";  
				let flash_title = f_closest.querySelector(".itemTitle > div:not(.roofTitle)").textContent;
				let action_flash = f_closest.classList.contains("opened") ?  "collapse" :  "expand";  
			    let flash_id_name = f_closest.querySelector(".mainArea").id; 
				let flash_id = flash_id_name.slice(0, flash_id_name.lastIndexOf("_"));
				if (flash_date != "") {
					// formated to local time
					let local_date = new Date(flash_date);
					const toISOStringWithTimezone = date=>{
						const pad = n=>`${Math.floor(Math.abs(n))}`.padStart(2, '0');
						return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
					};

					flash_date = toISOStringWithTimezone(local_date);
				}
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
					event: "content_click",
					date_published: flash_date,
					click_text: action_flash,
					newsflash_title: flash_title,
					content_type: "strip",
					componenta_name: "newsflash",
					newsflash_id: flash_id,
					position_in_componenta: index,
					});
				}  
			});
		});
         
    document.querySelectorAll('.TickerSliderComponenta .slotView .AccordionSocialsShareComponenta button.mailto, .TickerSliderComponenta .slotView .AccordionSocialsShareComponenta button.tw, .TickerSliderComponenta .slotView .AccordionSocialsShareComponenta button.wa, .TickerSliderComponenta .slotView .AccordionSocialsShareComponenta button.fb').forEach((el, index) => {
		el.addEventListener('click', function (event) {
			let fclosest = el.closest(".slotView");
			let fdate = fclosest.querySelector(".DateDisplay") && fclosest.querySelector(".DateDisplay").attributes.datetime ? fclosest.querySelector(".DateDisplay").attributes.datetime.textContent : "";  
			let ftitle = fclosest.querySelector(".itemTitle > div:not(.roofTitle)").textContent;  
			let social_network = "mailto";
			if (el.classList.contains("tw")) {
				social_network = "twitter";
			} else if (el.classList.contains("wa")) {
				social_network = "whatsapp";
			} else if (el.classList.contains("fb")) {
				social_network = "facebook";
			}

			if (fdate != "") {
				// formated to local time
				let local_date = new Date(fdate);
				const toISOStringWithTimezone = date=> {
					const pad = n=>`${Math.floor(Math.abs(n))}`.padStart(2, '0');
					return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
				};

				fdate = toISOStringWithTimezone(local_date);
			}
	
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
					event: "content_share",
					content_type_shared: "newsflash",
					social_network_name: social_network,
					date_published: fdate,
					newsflash_title: ftitle,
					content_type: "componenta",
					componenta_name: "newsflash",
					position_in_componenta: index,
				 });
			 }                                
			});
        });  
     
	}
	function ynet_flashes_func() {
		document
			.querySelectorAll(
				".article-flashes-page .AccordionSection .titleRow, .article-flashes-page .AccordionSection .titleRow.opened"
			)
			.forEach((elem, index) => {
				elem.addEventListener("click", function (event) {
					let flash_date =
						elem.querySelector(".DateDisplay") &&
						elem.querySelector(".DateDisplay").attributes.datetime
							? elem.querySelector(".DateDisplay").attributes.datetime
									.textContent
							: "";
					let flash_closest = elem.closest(".AccordionSection");
					let flash_title = flash_closest.querySelector(".title").textContent;
					let action_flash = elem.classList.contains("opened")
						? "Collapse"
						: "Expand";
					if (flash_date != "") {
						let local_date = new Date(flash_date);
						const toISOStringWithTimezone = (date) => {
							const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
							return (
								date.getFullYear() +
								"-" +
								pad(date.getMonth() + 1) +
								"-" +
								pad(date.getDate()) +
								" " +
								pad(date.getHours()) +
								":" +
								pad(date.getMinutes()) +
								":" +
								pad(date.getSeconds())
							);
						};
						flash_date = toISOStringWithTimezone(local_date);
					}
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							page_type: "News Update Page",
							date_published: flash_date,
							click_text: flash_title,
							content_type: `Flash ${action_flash}`,
							componenta_name: "NewsFlash Page",
							position_in_componenta: index,
						});
					}
					function waitForComPplus(callback) {
						var poops = setInterval(function () {
							if (document.querySelector(".AccordionSocialsShareComponenta")) {
								clearInterval(poops);
								callback();
							}
						}, 100);
					}
					waitForComPplus(function () {
						document
							.querySelectorAll(
								".AccordionSocialsShareComponenta button.mailto, .AccordionSocialsShareComponenta button.tw, .AccordionSocialsShareComponenta button.wa, .AccordionSocialsShareComponenta button.fb"
							)
							.forEach((el, index) => {
								el.addEventListener("click", function (event) {
									let fclosest = el.closest(".AccordionSection");
									let fdate =
										fclosest.querySelector(".DateDisplay") &&
										fclosest.querySelector(".DateDisplay").attributes.datetime
											? fclosest.querySelector(".DateDisplay").attributes
													.datetime.textContent
											: "";
									let ftitle = fclosest.querySelector(".title").textContent;
									let action_f = fclosest
										.querySelector(".titleRow")
										.classList.contains("opened")
										? "Collapse"
										: "Expand";
									let social_network = "mailto";
									if (el.classList.contains("tw")) {
										social_network = "twitter";
									} else if (el.classList.contains("wa")) {
										social_network = "whatsapp";
									} else if (el.classList.contains("fb")) {
										social_network = "facebook";
									}
									if (fdate != "") {
										let local_date = new Date(fdate);
										const toISOStringWithTimezone = (date) => {
											const pad = (n) =>
												`${Math.floor(Math.abs(n))}`.padStart(2, "0");
											return (
												date.getFullYear() +
												"-" +
												pad(date.getMonth() + 1) +
												"-" +
												pad(date.getDate()) +
												" " +
												pad(date.getHours()) +
												":" +
												pad(date.getMinutes()) +
												":" +
												pad(date.getSeconds())
											);
										};
										fdate = toISOStringWithTimezone(local_date);
									}
									if (window.pushGa4DataLayer) {
										window.pushGa4DataLayer(event, {
											event: "content_share",
											page_type: "News Update Page",
											content_type_shared: "flash",
											social_network_name: social_network,
											date_published: fdate,
											click_text: ftitle,
											content_type: `Flash ${action_f}`,
											componenta_name: "NewsFlash Page",
											position_in_componenta: index,
										});
									}
								});
							});
					});
				});
			});
	}
	function ynet_logos_func() {
		function get_label(link) {
			let logo_label = "ynet";
			if (link.includes("pplus")) {
				logo_label = "Pplus";
			} else if (link.includes("calcalist")) {
				logo_label = "Calcalist";
			} else if (link.includes("plus")) {
				logo_label = "Ynet+";
			} else if (link.includes("laisha")) {
				logo_label = "Laisha";
			}
			return logo_label;
		}
		document
			.querySelectorAll(
				".promoBtn, .logoLink, .tabTitleLogo, .ynetLogoInSticky, .YnetHeader .logo, .titleLink.rightTitleLink .rightTitleText .tabLogo, .YnetPremiumHeaderLogin .promoLabel"
			)
			.forEach((item) => {
				if (item.className.indexOf("tabLogo") > -1 && item.src === "") {
					return;
				}
				let logo_link = "https://ynet.co.il";
				if (item.className.indexOf("logoLink") > -1) {
					logo_link = item.href;
				} else if (
					item.className.indexOf("promoLabel") > -1 ||
					item.className.indexOf("promoBtn") > -1
				) {
					logo_link = "plus";
				} else if (item.parentNode.tagName == "A") {
					logo_link = item.parentNode.getAttribute("href");
				} else if (item.parentNode.parentNode.tagName == "A") {
					logo_link = item.parentNode.parentNode.getAttribute("href");
				}
				let ga_label =
					(item.parentNode.parentNode.parentNode.querySelector(".YnetHeader") &&
						!item.closest(".YnetPremiumHeaderLogin")) ||
					item.className.indexOf("ynetLogoInSticky") > -1
						? "ynet"
						: get_label(logo_link);
				item.addEventListener("click", function (event) {
					let promoBtn_div =
						item.className.indexOf("promoBtn") > -1 ||
						item.className.indexOf("promoLabel") > -1;
					let category_event = promoBtn_div
						? "Ynet+ - Registration"
						: "Navigation Bar";
					let action_event = promoBtn_div
						? "Registration Source"
						: "Logo Clicked";
					let label_event = promoBtn_div ? "Ynet+ Componenta" : `${ga_label}`;
					if (
						!promoBtn_div &&
						(ga_label == "ynet Plus")
					) {
						if (window.pushGa4DataLayer && ga_label != "Ynet+") {
							window.pushGa4DataLayer(event, {
								event: "content_click",
								click_text: "Ynet+",
								content_type: "menu",
								componenta_name: "Ynet+ HP Componenta",
								position_in_componenta: 0,
							});
						}
					} else {
						if (window.pushGa4DataLayer && ga_label != "Ynet+") {
							window.pushGa4DataLayer(event, {
								event: "content_click",
								click_text: label_event,
								content_type: "menu",
								componenta_name: category_event,
								position_in_componenta: 0,
							});
						}
					}
				});
			});
		window.addEventListener("scroll", (event) => {
			if (document.querySelector(".ynetLogoInSticky")) {
				let logo_sticky = document.querySelector(".ynetLogoInSticky");
				logo_sticky.addEventListener("click", function () {
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							click_text: "ynet",
							content_type: "menu",
							componenta_name: "Navigation Bar",
							position_in_componenta: 0,
						});
					}
				});
			}
		});
	}
	function ynet_auto_ticker_func() {
		if (document.querySelector(".auto-ticker-row-1280")) {
			document
				.querySelectorAll(
					".auto-ticker-row-1280 .slick-slide .slotView .moreDetails"
				)
				.forEach((flash, index) => {
					flash.addEventListener("click", function (event) {
						let flash_title = flash.querySelector("a").textContent
							? flash.querySelector("a").textContent
							: "";
						window.dataLayer.push({
							event: "GA_Event",
							Category: "News Flash",
							Action: "Click on a News Flash",
							Label: flash_title,
						});
					});
				});
		}
		if (document.querySelector(".TickerSliderComponenta")) {
            let all_flashes = document.querySelector(".TickerSliderComponenta .gotoButton") || document.querySelector(".TickerSliderComponenta .titleArea")
          all_flashes &&  all_flashes.addEventListener("click", function(event) {
                if (window.pushGa4DataLayer) {
                    window.pushGa4DataLayer(event, {
                        event: "content_click",
                        click_text: "לכל המבזקים",
                        content_type: "componenta",
                        componenta_name: "newsflash",
                        position_in_componenta: 0,
                    });
                }
            });
        }
	}
	function magazines_events_func() {
		let page_type =
			window.dcCG == "main"
				? "Home page"
				: window.dcCG == "sub"
				? "Category page"
				: "article";
		let navlist = window.isMobile1
			? document.querySelectorAll(".MobileLaishaHeader .LaishaNavList li a")
			: document.querySelectorAll(".LaishaHeader li a");
		let header_components = navlist;
		let header_ar = Array.from(header_components);
		for (let i in header_ar) {
			header_ar[i].addEventListener("click", function (event) {
				let li_title =
					header_ar[i].textContent != null ? header_ar[i].textContent : "";
				if (window.pushGa4DataLayer) {
					window.pushGa4DataLayer(event, {
						event: "content_click",
						page_type: page_type,
						click_text: li_title,
						content_type: "menu",
						componenta_name: "magazine_header",
						position_in_componenta: i,
					});
				}
			});
		}
		if (window.dcCG != "article") {
			let strip_components = document.querySelectorAll(
				".layoutItem.top-story-laisha .slotView, .layoutItem.laisha-gallery-strip .slotView"
			);
			let strip_ar = Array.from(strip_components);
			for (let y in strip_ar) {
				strip_ar[y].addEventListener("click", function (event) {
					let top_story = strip_ar[y].closest(".LaishaTopStoryComponenta")
						? true
						: false;
					let comp_name = top_story ? "top_story" : "gallery strip";
					let cont_type = top_story ? "top_story" : "strip";
					let strip_title_article =
						strip_ar[y].querySelector(".slotTitle a span") != null
							? strip_ar[y].querySelector(".slotTitle a span").textContent
							: "";
					let title_editor =
						strip_ar[y].querySelector(".authorInfo") &&
						strip_ar[y].querySelector(".authorInfo").textContent != null
							? strip_ar[y].querySelector(".authorInfo").textContent
							: "";
					let photo_title =
						strip_ar[y].querySelector("img") &&
						strip_ar[y].querySelector("img").attributes.title
							? strip_ar[y].querySelector("img").attributes.title.textContent
							: "there is no photo";
					let photo_url =
						strip_ar[y].querySelector("img") &&
						strip_ar[y].querySelector("img").attributes.src
							? strip_ar[y].querySelector("img").attributes.src.textContent
							: "there is no photo";
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							page_type: page_type,
							author_name: title_editor,
							photo_url: photo_url,
							photo_title: photo_title,
							click_text: strip_title_article,
							content_type: cont_type,
							componenta_name: comp_name,
							position_in_componenta: i,
						});
					}
				});
			}
			let multi_components = document.querySelectorAll(
				".layoutItem.multi-article-laisha .slotView, .layoutItem.laisha-article-headlines .slotView"
			);
			let multi_ar = Array.from(multi_components);
			for (let k in multi_ar) {
				multi_ar[k].addEventListener("click", function (event) {
					let closest_comp = multi_ar[k].closest(
						".LaishaMultiArticleComponenta"
					)
						? true
						: false;
					let closest_componenta =
						multi_ar[k].closest(".LaishaMultiArticleComponenta") != null
							? multi_ar[k].closest(".LaishaMultiArticleComponenta")
							: multi_ar[k].closest(".LaishaArticleHeadlines");
					let multi_title =
						closest_componenta.querySelector(".linkText") != null
							? closest_componenta.querySelector(".linkText").textContent
							: "multi_article";
					let compo_type = closest_comp
						? "multi_article"
						: "magazine_article_headlines_auto";
					let slotviews_multi_sum = Array.from(
						closest_componenta.querySelectorAll(".slotView")
					);
					let multi_strip_index = slotviews_multi_sum.indexOf(multi_ar[k]);
					let multi_title_article =
						multi_ar[k].querySelector(".slotTitle a") != null &&
						multi_ar[k].querySelector(".slotTitle a").textContent != null
							? multi_ar[k].querySelector(".slotTitle a").textContent
							: "";
					if (multi_ar[k].querySelector(".slotTitle a span") != null) {
						multi_title_article =
							multi_ar[k].querySelector(".slotTitle a span").textContent;
					}
					let title_editor = "";
					let title_date = "";
					if (multi_ar[k].closest(".LaishaMultiArticleComponenta")) {
						title_editor =
							multi_ar[k].querySelector(".authorInfo") &&
							multi_ar[k].querySelector(".authorInfo").textContent != null
								? multi_ar[k].querySelector(".authorInfo").textContent
								: "";
					}
					if (multi_ar[k].closest(".LaishaArticleHeadlines")) {
						title_editor =
							multi_ar[k].querySelector("span.authors:not(.commaView)") &&
							multi_ar[k].querySelector("span.authors:not(.commaView)")
								.textContent != null
								? multi_ar[k].querySelector("span.authors:not(.commaView)")
										.textContent
								: "";
						title_date =
							multi_ar[k].querySelector(".dateView") &&
							multi_ar[k].querySelector(".dateView").textContent != null
								? multi_ar[k].querySelector(".dateView").textContent
								: "";
						if (title_date != "") {
							function isDateValid(dateStr) {
								return !isNaN(new Date(dateStr));
							}
							if (isDateValid(title_date) != true) {
								try {
									if (title_date.includes(",")) {
										let date_splitted = title_date
											.replace(/[^0-9-.,:]/g, "")
											.split(",");
										let _date = date_splitted[1].split(".");
										let _date_new = `${_date[1]} ${_date[0]} ${_date[2]}`;
										let formated_date =
											_date_new + " " + date_splitted[0] + " UTC";
										let new_formated_date = new Date(formated_date);
										title_date = new_formated_date.toISOString();
									} else {
										let new_date = title_date.replace(/[^0-9-.]/g, "");
										let dateArray = new_date.split(".");
										let newDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
										let new_title_date = new Date(newDate);
										title_date = new_title_date.toISOString();
									}
								} catch (error) {
									console.error(error);
									title_date = "";
								}
							}
						}
					}
					let photo_title =
						multi_ar[k].querySelector("img") &&
						multi_ar[k].querySelector("img").attributes.title
							? multi_ar[k].querySelector("img").attributes.title.textContent
							: "there is no photo";
					let photo_url =
						multi_ar[k].querySelector("img") &&
						multi_ar[k].querySelector("img").attributes.src
							? multi_ar[k].querySelector("img").attributes.src.textContent
							: "there is no photo";
					let page_type =
						window.dcCG == "home"
							? "homepage"
							: window.dcCG == "main"
							? "category page"
							: window.dcCG == "article"
							? "article"
							: "subcategory page";
					if (window.pushGa4DataLayer) {
						window.pushGa4DataLayer(event, {
							event: "content_click",
							page_type: page_type,
							author_name: title_editor,
							date_published: title_date,
							photo_url: photo_url,
							photo_title: photo_title,
							click_text: multi_title_article,
							content_type: compo_type,
							componenta_name: multi_title,
							position_in_componenta: multi_strip_index,
						});
					}
				});
			}
		}
	}	
	function ynet_chapters_func() {
		document.querySelectorAll('.Magazine-Article-Chapter-Menu .chapter-item').forEach((chapter, index) => {
			chapter.addEventListener('click', function (event) {
			let closest_layout = chapter.closest(".layoutItem");
			let comp_name = closest_layout.classList.contains("isSticky") ? "chaptered_article_header_menu" : "chaptered_article_body_menu";
			if (window.pushGa4DataLayer) {
				window.pushGa4DataLayer(event, {
				event: "content_click",
				click_text: chapter.textContent,
				content_type: "menu",
				componenta_name: comp_name,
				date_modified: window.dataLayer[0].dateModified,
				date_published: window.dataLayer[0].datePublished,
				position_in_componenta: index,
				});
			 }
			});
		});
	}
	function magazines_new_events() {
		let page_type =
                window.dcCG == "main"
                    ? "Home page"
                    : window.dcCG == "sub"
                    ? "Category page"
                    : "article";

            let navlist = document.querySelectorAll(".magazines-header .navList div a");
            let header_components = navlist;
            let header_ar = Array.from(header_components);
            for (let i in header_ar) {
                header_ar[i].addEventListener("click", function (event) {
                    let div_title =
                        header_ar[i].querySelector("span").textContent != null ? header_ar[i].querySelector("span").textContent : "";
                    if (window.pushGa4DataLayer) {
                        window.pushGa4DataLayer(event, {
                            event: "content_click",
                            page_type: page_type,
                            click_text: div_title,
                            content_type: "menu",
                            componenta_name: "magazine_header",
                            position_in_componenta: i,
                        });
                    }
                });
            }
        
            // componenta magazine promotion text
                document.querySelectorAll('.magazine-Promotion-text').forEach((promotion, index) => {
                    promotion.addEventListener('click', function (event) {
                    if (window.pushGa4DataLayer) {
                        window.pushGa4DataLayer(event, {
                        event: "content_click",
                        click_text: promotion.querySelector(".title").textContent,
                        content_type: "magazine-Promotion-text",
                        componenta_name: promotion.querySelector(".roof-title").textContent,
                        position_in_componenta: index,
                        });
                     }
                    });
                });

                let promotions_component = document.querySelectorAll(".layoutItem.promotions-magazines .slotItem");
                let promotions_component_ar = Array.from(promotions_component);
                for (let i in promotions_component_ar) {
                    let promo_item = promotions_component_ar[i];
                    promo_item.addEventListener("click", function (event) {
                        let closest_comp = promo_item.closest(".layoutItem");
                        let comp_name = closest_comp.querySelector(".rightTitleText") ? closest_comp.querySelector(".rightTitleText").textContent : "";
                        let cont_type = closest_comp.classList[1];              
                        let slotviews_multi_sum = Array.from(closest_comp.querySelectorAll(".slotItem"));
                        let multi_strip_index = slotviews_multi_sum.indexOf(promotions_component_ar[i]);
                        let strip_title_article = promo_item.querySelector(".slotText span") != null ? promo_item.querySelector(".slotText span").textContent : "" ;                      
                        let photo_title =
                        promo_item.querySelector("img") &&
                        promo_item.querySelector("img").attributes.title
                                ? promo_item.querySelector("img").attributes.title.textContent
                                : "there is no photo";
                        let photo_url =
                        promo_item.querySelector("img") &&
                        promo_item.querySelector("img").attributes.src
                                ? promo_item.querySelector("img").attributes.src.textContent
                                : "there is no photo";                       
                        if (window.pushGa4DataLayer) {
                            window.pushGa4DataLayer(event, {
                                event: "content_click",
                                page_type: page_type,
                                photo_url: photo_url,
                                photo_title: photo_title,
                                click_text: strip_title_article,
                                content_type: cont_type,
                                componenta_name: comp_name,
                                position_in_componenta: multi_strip_index,
                            });
                        }
                    });
                } 
                // componentas
                let strip_components = document.querySelectorAll(
                    ".layoutItem.top-story-multi-wide .slotView, .layoutItem.top-story-multi-special .slotView, .layoutItem.top-story-magazine-category .slotView, .layoutItem.magazine-articles-side .slotView, .layoutItem.magazine-article-headlines-auto-new .slotView, .layoutItem.multi-article-magazine-auto .slotView, .layoutItem.magazine-articles-recommendations .slotView, .layoutItem.magazine-gallery-strip .slotView, .layoutItem.magazine-article-headlines-auto-new .slotView, .layoutItem.multi-articles-magazine-manual .slotView, .layoutItem.magazine-multi-articles-manuel-side .slotView"
                );
                let strip_ar = Array.from(strip_components);
                for (let y in strip_ar) {
                    strip_ar[y].addEventListener("click", function (event) {
                        let closest_comp = strip_ar[y].closest(".layoutItem");
                        let comp_name = closest_comp.querySelector(".rightTitleText") ? closest_comp.querySelector(".rightTitleText").textContent : "";
                        let cont_type = closest_comp.classList[1];
                        let add_num = closest_comp.querySelector(".smallItems") ? 1 : 0;
                        closest_comp = closest_comp.querySelector(".smallItems") ? closest_comp.querySelector(".smallItems") : closest_comp;                 
                        let slotviews_multi_sum = !strip_ar[y].closest(".mainItem") && Array.from(closest_comp.querySelectorAll(".slotView"));
                        let multi_strip_index = slotviews_multi_sum ? slotviews_multi_sum.indexOf(strip_ar[y]) + add_num : 0;
                        let strip_title_article =
                            strip_ar[y].querySelector(".slotTitle span") != null
                                ? strip_ar[y].querySelector(".slotTitle span").textContent
                                : (strip_ar[y].querySelector(".slotTitle a").textContent ? strip_ar[y].querySelector(".slotTitle a").textContent : "");
                        let title_editor =
                            strip_ar[y].querySelector(".authorInfo") &&
                            strip_ar[y].querySelector(".authorInfo").textContent != null
                                ? strip_ar[y].querySelector(".authorInfo").textContent
                                : (strip_ar[y].querySelector(".author") && strip_ar[y].querySelector(".author") ? strip_ar[y].querySelector(".author").textContent : "");
                        let photo_title =
                            strip_ar[y].querySelector("img") &&
                            strip_ar[y].querySelector("img").attributes.title
                                ? strip_ar[y].querySelector("img").attributes.title.textContent
                                : "there is no photo";
                        let photo_url =
                            strip_ar[y].querySelector("img") &&
                            strip_ar[y].querySelector("img").attributes.src
                                ? strip_ar[y].querySelector("img").attributes.src.textContent
                                : "there is no photo";
                        let title_date = "";  
                        if (strip_ar[y].querySelector(".dateView")) {
                            title_date = strip_ar[y].querySelector(".dateView").textContent != null ? strip_ar[y].querySelector(".dateView").textContent : "";
                            if (title_date != "") {
                                function isDateValid(dateStr) {
                                    return !isNaN(new Date(dateStr));
                                }
                                if (isDateValid(title_date) != true) {
                                        try {
                                            if (title_date.includes(",")) {
                                                let date_splitted = title_date
                                                    .replace(/[^0-9-.,:]/g, "")
                                                    .split(",");
                                                let _date = date_splitted[1].split(".");
                                                let _date_new = `${_date[1]} ${_date[0]} ${_date[2]}`;
                                                let formated_date =
                                                    _date_new + " " + date_splitted[0] + " UTC";
                                                let new_formated_date = new Date(formated_date);
                                                title_date = new_formated_date.toISOString();
                                            } else {
                                                let new_date = title_date.replace(/[^0-9-.]/g, "");
                                                let dateArray = new_date.split(".");
                                                let newDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
                                                let new_title_date = new Date(newDate);
                                                title_date = new_title_date.toISOString();
                                            }
                                            let local_date = new Date(title_date);
                                            const toISOStringWithTimezone = (date) => {
                                                const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
                                                return (
                                                    date.getFullYear() +
                                                    "-" +
                                                    pad(date.getMonth() + 1) +
                                                    "-" +
                                                    pad(date.getDate()) +
                                                    " " +
                                                    pad(date.getHours()) +
                                                    ":" +
                                                    pad(date.getMinutes()) +
                                                    ":" +
                                                    pad(date.getSeconds())
                                                );
                                            };
                                            title_date = toISOStringWithTimezone(local_date);
                                        } catch (error) {
                                            console.error(error);
                                            title_date = "";
                                        }
                                }
                            }
                        } else {
                            title_date = strip_ar[y].querySelector(".DateDisplay") &&
                            strip_ar[y].querySelector(".DateDisplay").attributes.datetime
                                ? strip_ar[y].querySelector(".DateDisplay").attributes
                                        .datetime.textContent
                                : "";  
                                if (title_date != "") {      
                                    // formated to local time
                                    let local_date = new Date(title_date);
                                    const toISOStringWithTimezone = date => {
                                        const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
                                        return date.getFullYear() +
                                        '-' + pad(date.getMonth() + 1) +
                                        '-' + pad(date.getDate()) +
                                        ' ' + pad(date.getHours()) +
                                        ':' + pad(date.getMinutes()) +
                                        ':' + pad(date.getSeconds());
                                    };                                   
                                    title_date = toISOStringWithTimezone(local_date);
                            }
                        }
                        
                        
                        if (window.pushGa4DataLayer) {
                            window.pushGa4DataLayer(event, {
                                event: "content_click",
                                page_type: page_type,
                                author_name: title_editor,
                                photo_url: photo_url,
                                photo_title: photo_title,
                                date_published: title_date,
                                click_text: strip_title_article,
                                content_type: cont_type,
                                componenta_name: comp_name,
                                position_in_componenta: multi_strip_index,
                            });
                        }
                    });
                }      
	}
	document.addEventListener("DOMContentLoaded", function () {
		const is_new_magazines = document.querySelector(".magazine2025");
		if (is_new_magazines) { 
			magazines_new_events(); 
		} else {
			window["YITSiteWidgetsCallbacks"] = window["YITSiteWidgetsCallbacks"] || [];
			window["YITSiteWidgetsCallbacks"].push(() => {
				ynet_premium_login();
				ynet_flashes_func();
				ynet_logos_func();
				ynet_chapters_func();
			});
			if (window.dcCG != "article") {
				radio_events_func();
				hp_componentas_func();
				category_componentas_func();
				ynet_auto_ticker_func();
			}
			if (window.dcCG == "article") {
				window.gtag = 1;
				piano_articlestatus_func();
				setTimeout(function () {
					photo_gallery_func();
					content_share_func();
					comments_event_func();
				}, 3000);
			}
			ynet_category_search();
			ynet_flashes_redmail_weather_icons();
			ynet_blogs_events();
			ynet_blogs_more();
			setTimeout(function () {
				ynet_hyperlink_tag();
				ynet_flashes_hp_func();
			}, 3000);
			if (		
				window.dcPath.includes("architecture") ||
				window.dcPath.includes("menta") ||
				window.dcPath.includes("fashion")
			) {
				magazines_events_func();
			}
		}
	 
	});
})();

