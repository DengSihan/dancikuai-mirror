export default{
	methods: {
		handleError(error){
            this.handleAxiosError(error);
            try{
               for(const [key, value] of Object.entries(error.response.data.errors)){
                    this.errors[key] = value;
                } 
            }catch(e){}
		},
		handleAxiosError(error){
            this.notify({
                color: 'danger',
                icon: `<i class="mdi-alert-circle mdi text-2xl"></i>`,
                title: `${error.response.status} ${error.response.statusText}`,
                text: error.response.data.message
            });
        }
	}
}