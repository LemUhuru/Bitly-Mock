export function configBitlySDK(login, apiKey) {
    window.bitlySDK = new window.BitlySDK({
        login,
        apiKey,
    })
}