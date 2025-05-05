export const formatearFechaBiblica = (fechaISO: string): string => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('es-ES', { month: 'long' });
    const annio = fecha.getFullYear();

    return `Registrado en las Escrituras el ${dia} de ${mes} del año ${annio}.`;
};
