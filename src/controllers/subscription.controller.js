export const checkSubscription = async (req, res) => {
  try {
    const { app_version, device_id, is_subscribed } = req.query;

    console.log("Checking subscription for device_id: %s, app_version: %s", device_id, app_version);

    // Simulate subscription check logic
    const subscribed = "true";
    // const subscribed = "false";


    return {
        app_version,
        device_id,
        is_subscribed: subscribed,
    };
  } catch (error) {
    console.error("Error checking subscription:", error.message);
    throw error;
  }
};
