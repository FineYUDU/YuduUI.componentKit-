export function formatearFechaDDMMYYYY(fechaInput: string | Date): string {
  const fecha = new Date(fechaInput);

  if (isNaN(fecha.getTime())) {
    throw new Error('Fecha inválida');
  }

  const dd = String(fecha.getDate()).padStart(2, '0');
  const mm = String(fecha.getMonth() + 1).padStart(2, '0');
  const yyyy = fecha.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

export function formatearFechaYYYYMMDD(fechaInput: string | Date): string {
  const fecha = new Date(fechaInput);

  if (isNaN(fecha.getTime())) {
    throw new Error('Fecha inválida');
  }

  const dd = String(fecha.getDate()).padStart(2, '0');
  const mm = String(fecha.getMonth() + 1).padStart(2, '0');
  const yyyy = fecha.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}