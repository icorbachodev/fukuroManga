<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">New Manga</h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="manga.name"
                  placeholder="restaurant name"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Slug</label>
              <div class="control">
                <input class="input" type="text" :placeholder="slug" disabled />
              </div>
            </div>
            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <input
                  v-model="manga.image"
                  class="input"
                  type="text"
                  placeholder="https://...."
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  v-model="manga.description"
                  class="input"
                  type="text"
                  placeholder="description"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Autor</label>
              <div class="control">
                <input
                  v-model="manga.autor"
                  class="input"
                  type="text"
                  placeholder="address"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Comment</label>
              <div class="control">
                <textarea
                  v-model="manga.comment"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="text"
                />
              </div>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <button
                  class="button is-danger"
                  type="button"
                  @click="$router.back()"
                >
                  Cancel
                </button>
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onSubmitButton"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addDoc, collection } from 'firebase/firestore'
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      manga: {
        name: null,
        autor: null,
        image: null,
        comment: null,
        slug: null
      }
    }
  },
  watch: {
    slug() {
      this.manga.slug = this.slug
    }
  },
  computed: {
    slug() {
      if (this.manga.name) {
        return this.manga.name.replace(/ /g, '-')
      } else {
        return null
      }
    }
  },
  methods: {
    onSubmitButton() {
      const response = addDoc(collection(db,"mangas"), this.manga)
      response.then(() => {
        this.$router.back()
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>