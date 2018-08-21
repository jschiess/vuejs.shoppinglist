$( document ).ready( () => {

	
	var config = {
		apiKey: "AIzaSyDfuS1hqIsv-4eMAO9ltGwdIjC8LBJcHjw",
		authDomain: "vue-checklist.firebaseapp.com",
		databaseURL: "https://vue-checklist.firebaseio.com",
		projectId: "vue-checklist",
		storageBucket: "vue-checklist.appspot.com",
		messagingSenderId: "703439171309"
	};
	
	firebase.initializeApp(config);
	
	const fire = firebase.database().ref().child('object/');
	


	let myobj = {
	}
	
	fire.on('value', (snap) => {	
		vue.checklist = snap.val()
	});
	
	
	var vue = new Vue({
		el: "#vueChecklist",
		data: {
			checklist: myobj,
			obj: 'lel'
		}, 
		methods: {
			setobj: function(data) {
				this.checklist = data
			},
			kek: function(a, n) {
				console.log('function kek activated');
				
				var tempobj = this.checklist
			
				if(this.checklist[n]) {
					tempobj[n] = false; 
				} else{
					tempobj[n] = true;
				}
				
				//this.checklist = tempobj
				fire.set(vue.getobj())

			},
			getobj: function() {
				return this.checklist;
			},
			//deletes the element with ID "n"
			del: function(a, n){

				var tempobj = this.checklist

				delete tempobj[n]


				fire.set(tempobj)

			}
		}
	})

	
	$('#forminp').on('submit', function(data) {
		var kek = $('#newentry').val();
		data.preventDefault();
		var tempobj = vue.getobj()
		if(tempobj){

			tempobj[kek] = false
		} else{
			tempobj = {
				filler: false
			}
			tempobj[kek] = tempobj.filler;
			delete tempobj.filler;

		}
		console.log(tempobj);
		
		//tempobj[kek] = true

		fire.set(tempobj)
	
		
				
	})

	$('#vueChecklist').toggle()


});