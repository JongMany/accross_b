import React from 'react';
import Dashboard from './_components/Dashboard';
import useColumnList from './_hooks/queries/useColumnList';
import useGroupList from './_hooks/queries/useGroupList';

export default function AppIndexPage() {
  const {
    data: { columns: columnList },
    isError: isColumListError,
    isLoading: isColumnListLoading,
  } = useColumnList();
  const {
    data: { groups: groupList },
    isError: isGroupListError,
    isLoading: isGroupListLoading,
  } = useGroupList();

  return (
    <>
      {isColumListError && <div>Column List Error</div>}
      {isColumnListLoading && <div>Column List Loading</div>}
      {isGroupListError && <div>Group List Error</div>}
      {isGroupListLoading && <div>Group List Loading</div>}
      {groupList && columnList && (
        <Dashboard columnList={columnList} groupList={groupList} />
      )}
    </>
  );
}
