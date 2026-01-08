
// Simple ID generator if needed, or reuse a shared one. 
// For now, I'll implement a simple one like 'ART-timestamp-random'

export const generateArtworkId = async (): Promise<string> => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 5);
    return `ART-${timestamp}-${random}`.toUpperCase();
};
