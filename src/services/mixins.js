export const Dictionary = {
	data(){
		return {
			loaded: false,
			text_sheet: 'texte'
		}
	},
	methods: {
		__(key) {
			let data = this.data;
			let keys = [this.text_sheet];
			key = key.replace(/ > /g, '.').replace(/ /g, '_').toLowerCase().split('.');

			keys = keys.concat(key);

			for(let i = 0; i < keys.length; i++) {

				let entry = keys[i];

				if( data && entry in data )
					data = data[entry];
				else
					return '['+key.join('.')+']';
			}

			return data;
		}
	},
	computed:{
		data(){
			return this.$store.getters.dico();
		}
	}
};