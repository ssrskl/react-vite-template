import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
// 添加相对时间插件
dayjs.extend(relativeTime);
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toFromNow = (date: number | Date) => {
    // 计算传入的时间距离现在的时间过去了多久
    return dayjs(date).locale("zh-cn").fromNow();
};
