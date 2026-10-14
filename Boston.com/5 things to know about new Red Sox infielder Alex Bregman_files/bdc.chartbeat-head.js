(function() {
    const _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
	let noCookies = false;
	
	if ( ( parseInt( chartbeat_config.oneTrusActive ) === 1 ) ) {
		const onetrustStorageConsent = JSON.parse( localStorage.getItem( 'consent_one_trust_bdc' ) );

		if ( ( onetrustStorageConsent !== null )  && ( ! onetrustStorageConsent.C0002 ) )  {
			noCookies = true;
		}

	}

	_sf_async_config.noCookies =  noCookies
	_sf_async_config.uid = chartbeat_config.uid
    _sf_async_config.domain = chartbeat_config.domain
    _sf_async_config.useCanonical = chartbeat_config.useCanonical
 })();
 