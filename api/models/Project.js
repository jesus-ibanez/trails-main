'use strict'

const Model = require('trails/model')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/**
 * @module Project
 * @description TODO document Model
 */
module.exports = class Project extends Model {

  static config () {
  	return {

      // Schema options
      schema: {

        toObject: {
          virtuals: true
        },

        toJSON: {
          virtuals: true
        }
      }
    }

  }

  static schema () {
  	return {
      name: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        default: false
      }
    }

  }
}
