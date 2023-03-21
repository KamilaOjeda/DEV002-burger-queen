import {
	addDoc,
	serverTimestamp,
	ordersCollection,
	onSnapshot,
	q,
} from '/src/firestore/firestore-init';

export const addOrder = async (client, products, total) => {
	const newOrderContent = {
			createdAt: serverTimestamp(),
			client: client,
			products: products,
			total: total,
			status: 'Pendiente',
	}
	try {
		await addDoc(ordersCollection, newOrderContent	
		).then(() => {
			alert('Orden enviada');
		});
	} catch (error) {
		console.log(error);
	}
};

export const onGetOrders = (callback) => onSnapshot(q, callback);

