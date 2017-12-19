// @namespace
var ARjs = ARjs || {}

/**
 * Create an debug UI for an ARjs.Anchor
 * 
 * @param {ARjs.Anchor} arAnchor - the anchor to user
 */
ARjs.SessionDebugUI = function(arSession, tangoPointCloud){
	var trackingBackend = arSession.arContext.parameters.trackingBackend

	this.domElement = document.createElement('div')
	this.domElement.style.color = 'rgba(0,0,0,0.9)'
	this.domElement.style.backgroundColor = 'rgba(127,127,127,0.5)'
	this.domElement.style.display = 'inline-block'
	this.domElement.style.padding = '0.5em'
	this.domElement.style.margin = '0.5em'
	this.domElement.style.textAlign = 'left'

	//////////////////////////////////////////////////////////////////////////////
	//		add title
	//////////////////////////////////////////////////////////////////////////////
	// var domElement = document.createElement('div')
	// domElement.style.display = 'block'
	// domElement.style.fontWeight = 'bold'
	// domElement.style.fontSize = '120%'
	// this.domElement.appendChild(domElement)
	// domElement.innerHTML = 'AR.js Session Debug'

	

	//////////////////////////////////////////////////////////////////////////////
	//		toggle-point-cloud
	//////////////////////////////////////////////////////////////////////////////

	if( trackingBackend === 'tango' && tangoPointCloud ){
		var domElement = document.createElement('button')
		this.domElement.appendChild(domElement)

		domElement.id= 'buttonTangoTogglePointCloud'
		domElement.innerHTML = 'toggle-point-cloud'
		domElement.href='javascript:void(0)'

		domElement.addEventListener('click', function(){
			var scene = arSession.parameters.scene
	// TODO how tangoPointCloud, get connected here ???
	// in arguments simply ?
			if( tangoPointCloud.object3d.parent ){
				scene.remove(tangoPointCloud.object3d)
			}else{
				scene.add(tangoPointCloud.object3d)			
			}
		})
	}
}

/**
 * Url of augmented-website service - if === '' then dont include augmented-website link
 * @type {String}
 */
ARjs.SessionDebugUI.AugmentedWebsiteURL = 'https://webxr.io/augmented-website'

//////////////////////////////////////////////////////////////////////////////
//		ARjs.AnchorDebugUI
//////////////////////////////////////////////////////////////////////////////

/**
 * Create an debug UI for an ARjs.Anchor
 * 
 * @param {ARjs.Anchor} arAnchor - the anchor to user
 */
ARjs.AnchorDebugUI = function(arAnchor){
	var _this = this 
	var arSession = arAnchor.arSession
	var trackingBackend = arSession.arContext.parameters.trackingBackend
	
	this.domElement = document.createElement('div')
	this.domElement.style.color = 'rgba(0,0,0,0.9)'
	this.domElement.style.backgroundColor = 'rgba(127,127,127,0.5)'
	this.domElement.style.display = 'inline-block'
	this.domElement.style.padding = '0.5em'
	this.domElement.style.margin = '0.5em'
	this.domElement.style.textAlign = 'left'

	//////////////////////////////////////////////////////////////////////////////
	//		add title
	//////////////////////////////////////////////////////////////////////////////

	// var domElement = document.createElement('div')
	// domElement.style.display = 'block'
	// domElement.style.fontWeight = 'bold'
	// domElement.style.fontSize = '120%'
	// this.domElement.appendChild(domElement)
	// domElement.innerHTML = 'Anchor Marker Debug'

	
	//////////////////////////////////////////////////////////////////////////////
	//		toggle-marker-helper
	//////////////////////////////////////////////////////////////////////////////

	
	

	//////////////////////////////////////////////////////////////////////////////
	//		Reset-marker-area
	//////////////////////////////////////////////////////////////////////////////

	
}
