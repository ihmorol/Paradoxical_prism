export const generateReportId = async (): Promise<string> => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 5);
    return `RPT-${timestamp}-${random}`.toUpperCase();
};
