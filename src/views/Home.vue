<script lang="ts" setup>
import { columns } from './configs/table'
import HomeControllers from './controllers/useHome'

const { home, handleChangePage, handleFetch, reset, handleRowClick } = HomeControllers
reset()
handleFetch()
</script>

<template>
  <div class="center-content">
    <a-table
      :columns="columns"
      :dataSource="home.dataSource.data"
      :pagination="false"
      size="small"
      :customRow="(record) => ({ onClick: () => handleRowClick(record) })"
    />

    <div class="pagination">
      <a-pagination
        size="small"
        :total="home.dataSource.meta.total"
        simple
        :current="home.page"
        @change="handleChangePage"
      />
    </div>
  </div>
</template>

<style lang="less">
.center-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
}

.pagination {
  margin-top: 20px;
  .ant-pagination-mini {
    span {
      color: white;
    }
    li {
      color: white;
    }
    input[type='text'] {
      color: black;
    }
    button {
      color: white;
    }
  }
}
</style>
