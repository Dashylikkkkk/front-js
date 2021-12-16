<template>
  <div class="card">
    <div class="title">Форма обратной связи</div>
    <form>
      <div class="form-field">
        <input type="text" id="name" placeholder="Твое имя" required />
      </div>
      <div class="form-field">
        <input type="text" id="mail" placeholder="Твой E-mail" required />
      </div>
      <div class="form-filed">
        <textarea
          type="text"
          id="about-u"
          placeholder="Расскажи о себе"
          required
        ></textarea>
      </div>
      <div class="submit">
        <input type="submit" value="Отправить" />
      </div>
    </form>
  </div>
</template>
