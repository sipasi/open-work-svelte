class DateToText {
  public static format(date: Date, options: Intl.DateTimeFormatOptions) {
    return date.toLocaleDateString("en-US", options);
  }

  public static dayNumMonthText(date: Date, day: number) {
    const temp = new Date(date);

    temp.setDate(day);

    return this.format(temp, {
      weekday: "long",
      day: "numeric",
    });
  }
  public static dayFullMonthFull(date: Date, day: number) {
    const temp = new Date(date);

    temp.setDate(day);

    return this.format(temp, {
      weekday: "long",
      day: "numeric",
    });
  }
  public static yearNumMonthText(date: Date) {
    return this.format(date, {
      year: "numeric",
      month: "long",
    });
  }
}

export default DateToText;
