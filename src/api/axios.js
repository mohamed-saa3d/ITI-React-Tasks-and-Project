import axios from "axios";

/**
 * ============================================================
 *  البوابة (Interceptor) للريكوست والريسبونس
 * ============================================================
 *
 *  ليه بنعمل instance؟
 *  - بدل ما نكرر العنوان الأساسي في كل ريكوست
 *  - وبدل ما نكرر إضافة الـ token في كل ريكوست
 *  - وبدل ما نكرر التعامل مع الأخطاء في كل ريكوست
 *
 *  مرة واحدة هنا -> كل الريكوستات في المشروع تستفيد.
 */

// 1) نعمل instance واحد للعناوين
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000, // لو السيرفر اتأخر أكتر من 10 ثواني، نوقف ونقول خطأ
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * ============================================================
 *  2) Request Interceptor -> بوابة "الخروج"
 * ============================================================
 *  بيشتغل قبل ما الريكوست يمشي للسيرفر.
 *  مفيد في: إضافة التوكن، تغيير اللغة، تسجيل الريكوست.
 *
 *  (config) = بيانات الريكوست (العنوان، الهيدرز، البودي...)
 *  لازم ترجّع config، وإلا الريكوست مش هيكمل!
 */
api.interceptors.request.use(
  (config) => {
    console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.baseURL}${config.url}`);

    // مثال حقي: إضافة توكن لو المستخدم مسجّل دخول
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // ⚠️ مهم جدًا: نرجّع الريكوست عشان يكمل
  },
  (error) => {
    // حصل خطأ قبل ما الريكوست يخرج أصلاً
    console.error("[REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

/**
 * ============================================================
 *  3) Response Interceptor -> بوابة "الدخول"
 * ============================================================
 *  بيشتغل بعد ما السيرفر يرد.
 *  مفيد في: تسجيل الريسبونس، التعامل مع 401 (توكن انتهى)،
 *  وتحويل شكل الرد لشكل موحّد.
 *
 *  (response) = الرد كامل: { data, status, headers, config }
 */
api.interceptors.response.use(
  (response) => {
    console.log(`[RESPONSE] ${response.status} ${response.config.url}`, response.data);

    // ⚠️ نقطة مهمة جدًا:
    // لو رجّعنا response كامل، كل مكان في الكود لازم يكتب response.data
    // لكن لو رجّعنا response.data بس، الكود بيبقى أنضف وأقصر.
    // إحنا هنا بنرجّع الرد كامل عشان تفضل شايف الـ status والـ headers،
    // وممكن تجرب ترجّع response.data وتشوف الفرق.
    return response;
  },
  (error) => {
    // هنا بنوحّد شكل رسالة الخطأ عشان تبقى مفهومة للمستخدم
    let message = "Something went wrong";

    if (error.response) {
      // السيرفر رد بس بحالة خطأ (زي 404 أو 500)
      const status = error.response.status;
      if (status === 404) message = "Not found (404)";
      else if (status === 401) message = "Unauthorized, please login (401)";
      else if (status >= 500) message = "Server error, try again later (500)";
      else message = `Request failed (${status})`;
    } else if (error.request) {
      // الريكوست خرج بس مفيش رد خالص (النت وقع مثلاً)
      message = "No response from server, check your internet";
    } else {
      // خطأ في الكود نفسه قبل ما الريكوست يخرج
      message = error.message;
    }

    console.error("[RESPONSE ERROR]", message);
    error.message = message; // نستبدل الرسالة القديمة بواحدة مفهومة

    return Promise.reject(error);
  }
);

export default api;
