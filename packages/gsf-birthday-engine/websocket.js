export const emitBirthdayEvent = (io, payload) => {
  io.to(`user-${payload.userId}`).emit("birthday_event", payload);
};
