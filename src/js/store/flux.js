const getState = ({ getStore, getActions, setStore }) => {
	const handleResponse = (response) => {
		if (!response.ok) throw Error(response.statusText);
		return response.text().then(text => text ? JSON.parse(text) : {});
	};

	const refreshContacts = () => {
		fetch("https://playground.4geeks.com/contact/agendas/jihee/contacts")
			.then(handleResponse)
			.then((data) => {
				console.log("fetched contacts data: ", data);
				if (Array.isArray(data.contacts)) {
					setStore({ contactList: data.contacts });
					console.log("Contacts put in store: ", data.contacts);
				} else {
					console.error("Fetched data is not an array: ", data);
					setStore({ contactList: [] })
				}
			})
			.catch((error) => console.error("Fetching contacts failed: ", error));
	}

	return {
		store: {
			//Here goes the contact list
			contactList: []
		},

		actions: {
			// Use getActions to call a function within a fuction

			addContacts: (contactData) => {
				fetch("https://playground.4geeks.com/contact/agendas/jihee/contacts", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contactData)
				})
					.then(handleResponse)
					.then((data) => console.log("Contact added to API: ", data.name))
					.then(() => refreshContacts())
					.catch((error) => console.error("Adding contact failed: ", error));
			},

			getContacts: refreshContacts,

			editContacts: (id, contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/jihee/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact),
				})
					.then(handleResponse)
					.then(() => refreshContacts())
					.catch((error) => console.error("Editing contact failed: ", error));

			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/jihee/contacts/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
				})
				.then(handleResponse) 
				.then(() => refreshContacts())  
				.then((data) => console.log("Contact deleted from API ", data.name))
				.catch((error) => console.error("Failed to delete contact: ", error))
			}
			
		}
	}
}
export default getState;
