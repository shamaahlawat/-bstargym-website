export const initialStates = {

	page_details: {
		page_title: "PoleTalks",
		current_page: null,
		page_load_error: false,
		loaders: {
			page_loading: false,
			item_loading: false,
			sub_item_loading: false
		},
		device_details: {
			lang: 'en',
			device_data: {},
		},
	},

	count_details: {
		current_count: 0
	}
};
