export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      userMessage: payload.message,
    };
    const res = await fetch(
      `https://coaches-app-d7ad0-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(res.message || 'Failed to send request.');
      throw error;
    }

    newRequest.id = resData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const res = await fetch(
      `https://coaches-app-d7ad0-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const resData = await res.json();
    if (!res.ok) {
      const error = new Error(res.message || 'Failed to fetch.');
      throw error;
    }

    const requests = [];
    for (const key in resData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: resData[key].userEmail,
        userMessage: resData[key].userMessage,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
