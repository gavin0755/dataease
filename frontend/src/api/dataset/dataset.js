import request from '@/utils/request'

export function loadTable(data) {
  return request({
    url: '/dataset/table/list',
    method: 'post',
    loading: true,
    data
  })
}

export function getScene(sceneId) {
  return request({
    url: '/dataset/group/getScene/' + sceneId,
    loading: true,
    method: 'post'
  })
}

export function addGroup(data) {
  return request({
    url: '/dataset/group/save',
    method: 'post',
    loading: true,
    data
  })
}

export function delGroup(groupId) {
  return request({
    url: '/dataset/group/delete/' + groupId,
    loading: true,
    method: 'post'
  })
}

export function addTable(data) {
  return request({
    url: '/dataset/table/update',
    method: 'post',
    loading: true,
    data
  })
}

export function delTable(tableId) {
  return request({
    url: '/dataset/table/delete/' + tableId,
    loading: true,
    method: 'post'
  })
}

export function groupTree(data) {
  return request({
    url: '/dataset/group/tree',
    method: 'post',
    loading: true,
    data
  })
}

export function listDatasource() {
  return request({
    url: '/datasource/list',
    loading: true,
    method: 'get'
  })
}

export function getTable(id) {
  return request({
    url: '/dataset/table/get/' + id,
    loading: true,
    method: 'post'
  })
}

export function getPreviewData(data) {
  return request({
    url: '/dataset/table/getPreviewData',
    method: 'post',
    loading: true,
    data
  })
}

export function fieldList(id) {
  return request({
    url: '/dataset/field/list/' + id,
    loading: true,
    method: 'post'
  })
}

export function batchEdit(data) {
  return request({
    url: '/dataset/field/batchEdit',
    method: 'post',
    loading: true,
    data
  })
}

export function post(url, data) {
  return request({
    url: url,
    method: 'post',
    loading: true,
    data
  })
}

export function fieldValues(fieldId) {
  return request({
    url: '/dataset/field/fieldValues/' + fieldId,
    method: 'post',
    loading: true
  })
}

export default { loadTable, getScene, addGroup, delGroup, addTable, delTable, groupTree }
