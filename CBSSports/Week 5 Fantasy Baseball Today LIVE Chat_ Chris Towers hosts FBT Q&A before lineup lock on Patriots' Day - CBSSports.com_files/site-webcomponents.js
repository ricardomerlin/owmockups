import { p as promiseResolve, b as bootstrapLazy } from './index-3ce36a51.js';
export { s as setNonce } from './index-3ce36a51.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.25.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["cbssports-iframe",[[0,"cbssports-iframe",{"src":[1],"disableLazy":[4,"disable-lazy"],"isInView":[32]}]]],["cbssports-avatar_22",[[1,"cbssports-expert-picks-by-game-id",{"gameId":[1,"game-id"],"ttag":[1],"upcomingLeaguePicksTtag":[1,"upcoming-league-picks-ttag"],"loading":[32],"data":[32],"filter":[32],"filters":[32],"error":[32],"isSportslineSubscriber":[32],"isUserLoggedIn":[32]}],[1,"cbssports-expert-picks-by-game-id-preview",{"gameId":[1,"game-id"],"viewAllUrl":[1,"view-all-url"],"first":[2],"ttag":[1],"loading":[32],"data":[32],"error":[32],"isSportslineSubscriber":[32],"isUserLoggedIn":[32]}],[1,"cbssports-sportsline-hottest-experts",{"league":[1],"ttag":[1],"expertTtag":[1,"expert-ttag"],"loading":[32],"data":[32],"error":[32]}],[1,"cbssports-matchup-analysis-banner",{"gameId":[1,"game-id"],"loading":[32],"data":[32],"error":[32]}],[4,"cbssports-carousel",{"disableDefaultArrows":[516,"disable-default-arrows"],"shouldShowNavigation":[32],"isAtStart":[32],"isAtEnd":[32],"externalLeftArrow":[32],"externalRightArrow":[32],"scrollCarouselToStart":[64],"scrollToCarouselEnd":[64]}],[0,"cbssports-videoplayer",{"url":[1]}],[1,"cbssports-expert-picks-upsell-banner",{"ttag":[1],"avatars":[16],"leagueId":[8,"league-id"],"isUserLoggedIn":[4,"is-user-logged-in"]}],[1,"cbssports-carousel-navigation",{"navigateLeft":[16],"navigateRight":[16],"showLeftButton":[4,"show-left-button"],"showRightButton":[4,"show-right-button"]}],[1,"cbssports-circular-progress",{"size":[1]}],[1,"cbssports-expert-picks-filter",{"activeFilter":[1,"active-filter"],"clickHandler":[16],"filters":[16]}],[1,"cbssports-expert-picks-upsell-banner-preview",{"ttag":[1],"leagueId":[8,"league-id"],"isUserLoggedIn":[4,"is-user-logged-in"]}],[1,"cbssports-expert-pick-card",{"props":[16]}],[1,"cbssports-expert-picks-title",{"picksCount":[2,"picks-count"],"picksMinimumCount":[2,"picks-minimum-count"],"href":[1]}],[1,"cbssports-expert-picks-upcoming-league-picks",{"header":[1],"leagueAbbrev":[1,"league-abbrev"],"ttag":[1],"loading":[32],"data":[32],"error":[32]}],[1,"cbssports-expert-picks-card-skeleton"],[1,"cbssports-expert-pick-card-selection",{"selection":[16],"locked":[4],"createdAt":[8,"created-at"],"resultStatus":[1,"result-status"],"isSubscriber":[4,"is-subscriber"],"expert":[16],"sportsbookName":[1,"sportsbook-name"],"game":[16]}],[1,"cbssports-player-avatar",{"playerId":[8,"player-id"],"playerTeamId":[8,"player-team-id"],"playerTeamAlt":[1,"player-team-alt"],"size":[1]}],[1,"cbssports-pill",{"variant":[1]}],[1,"cbssports-team-logo",{"size":[1],"alt":[1],"teamId":[8,"team-id"]}],[1,"cbssports-sportsline-logo",{"color":[1],"size":[1]}],[1,"cbssports-avatar",{"size":[1],"src":[1],"alt":[1],"mediaQuery":[16]}],[1,"cbssports-icon",{"name":[1],"size":[1],"width":[8],"height":[8],"color":[1],"iconData":[32],"error":[32]}]]]], options);
});

//# sourceMappingURL=site-webcomponents.js.map